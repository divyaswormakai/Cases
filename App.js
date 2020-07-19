import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const App = () => {
  //for name searching
  const [searchName, setSearchName] = useState('');
  //for filtering
  const [filterCategory, setFilterCategory] = useState('');
  const [allCategories, setAllCategories] = useState({
    Gender: [],
    Status: [],
  });
  const [categories, setCategories] = useState([]);
  //maybe for highlighting for future
  const [currCategory, setCurrCategory] = useState('');
  //all wards
  const [allWards, setAllWards] = useState([]);
  //see current ward
  const [currWard, setCurrWard] = useState(wards[0]);
  //total data that will be available
  const [wholePopulation, setWholePopulation] = useState([]);
  //total people that will be shown
  const [people, setPeople] = useState([]);

  const [peopleFromFilter, setPeopleFromFilter] = useState([]);

  //inital render of the app
  useEffect(() => {
    setWholePopulation(dummyData);
    setPeople(dummyData);
    findAllCategories(dummyData, setAllCategories);
    setAllWards(wards);
  }, []);

  //change people according to the search
  useEffect(() => {
    FindPeopleWithSearch(searchName, wholePopulation, setPeople);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  //Change categories when Filter category is changed
  useEffect(() => {
    //Get categories according to the filter used
    DifferentiateCategory(
      filterCategory,
      allCategories,
      setCategories,
      setCurrCategory,
    );
    if (filterCategory === 'All') {
      setCurrWard(allWards[0]);
      setPeople(wholePopulation);
      setPeopleFromFilter(wholePopulation);
    }
    //so that default value is not preserved during filter changing
    else {
      setPeople([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategory, wholePopulation]);

  // current ward data setting
  useEffect(() => {
    if (currWard.toString() === 'Others') {
      console.log('Others selecting');
      let tempPeople = peopleFromFilter.filter(person => person.ward === 15);
      setPeople(tempPeople);
    } else if (currWard !== allWards[0]) {
      let tempPeople = peopleFromFilter.filter(
        person => person.ward.toString() === currWard,
      );
      setPeople(tempPeople);
    } else {
      setPeople(peopleFromFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currWard]);

  const setCurrentCategory = value => {
    setCurrCategory(value);
    SelectCurrentCategoryPeople(
      wholePopulation,
      setPeople,
      value,
      filterCategory,
      setPeopleFromFilter,
    );
  };

  const SaveNewData = newData => {
    console.log(newData);
    let temp = wholePopulation.concat(newData);
    setWholePopulation(temp);
    setPeople(temp);
    setCurrCategory('');
    setFilterCategory('All');
  };

  return (
    <View style={styles.content}>
      <Header
        searchName={searchName}
        setSearchName={setSearchName}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        allWards={allWards}
        currWard={currWard}
        setCurrWard={setCurrWard}
      />
      <Body data={people} allCategories={allCategories} />
      <Footer
        SaveNewData={SaveNewData}
        statusData={people}
        allCategories={allCategories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 8,
    padding: 20,
  },
});

//Filter people with name
const FindPeopleWithSearch = (searchName, wholePopulation, setPeople) => {
  let filteredData = wholePopulation.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase()),
  );
  setPeople(filteredData);
};

//Find all list of categories
const findAllCategories = (dummyData, setAllCategories) => {
  let cats = {};
  //for age
  cats.Gender = genders;

  //for status:
  cats.Status = status;

  setAllCategories(cats);
};
//Differentiate categories based on the selected filterCategory and set default category
const DifferentiateCategory = (
  filterCategory,
  allCategories,
  setCategories,
  setCurrCategory,
) => {
  let temp = [];
  switch (filterCategory) {
    case 'Gender': {
      temp = allCategories.Gender;
      break;
    }
    case 'Status': {
      temp = allCategories.Status;
      break;
    }
    default: {
      break;
    }
  }
  setCategories(temp);
  //set default value of current category
  if (temp.length > 0) {
    setCurrCategory(temp[0]);
  }
};

// Set the people under current Active Category
const SelectCurrentCategoryPeople = (
  wholePopulation,
  setPeople,
  currCategory,
  filterCategory,
  setPeopleFromFilter,
) => {
  let selectedPeople = [];
  console.log('People classification started');
  if (filterCategory === 'Gender') {
    console.log('Gender classification');
    selectedPeople = wholePopulation.filter(
      population => population.gender === currCategory,
    );
  } else if (filterCategory === 'Status') {
    selectedPeople = wholePopulation.filter(
      population => population.status === currCategory,
    );
  } else {
    selectedPeople = wholePopulation;
  }
  console.log(
    wholePopulation.length,
    selectedPeople.length,
    filterCategory,
    currCategory,
  );
  setPeopleFromFilter(selectedPeople);
  setPeople(selectedPeople);
};

const genders = ['Male', 'Female'];

const status = ['Quarantine', 'Home Quarantine', 'Released', 'Isolation'];
const wards = [
  'All',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  'Others',
];
const dummyData = [
  {
    id: 1,
    name: 'Person 1',
    gender: 'Male',
    age: 30,
    location: 'Location 1',
    number: '0123456789',
    country: 'Nepal',
    status: 'Quarantine',
    ward: 1,
  },
  {
    id: 2,
    name: 'Person 2',
    gender: 'Male',
    age: 25,
    location: 'Location 2',
    number: '0123456789',
    country: 'India',
    status: 'Home Quarantine',
    ward: 1,
  },
  {
    id: 3,
    name: 'Person 3',
    gender: 'Female',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'Kuwait',
    status: 'Released',
    ward: 2,
  },
  {
    id: 4,
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'USA',
    status: 'Isolation',
    ward: 5,
  },
  {
    id: 5,
    name: 'Person 5',
    gender: 'Male',
    age: 25,
    location: 'Location 5',
    number: '0123456789',
    country: 'Nepal',
    status: 'Home Quarantine',
    ward: 6,
  },
  {
    id: 6,
    name: 'Person 6',
    gender: 'Female',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'India',
    status: 'Home Quarantine',
    ward: 10,
  },
  {
    id: 7,
    name: 'Person 7',
    gender: 'Female',
    age: 25,
    location: 'Location 7',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 7,
  },
  {
    id: 8,
    name: 'Person 8',
    gender: 'Female',
    age: 55,
    location: 'Location 8',
    number: '0123456789',
    country: 'Nepal',
    status: 'Quarantine',
    ward: 7,
  },
  {
    id: 8,
    name: 'Person 8',
    gender: 'Female',
    age: 25,
    location: 'Location 8',
    number: '0123456889',
    country: 'Nepal',
    status: 'Released',
    ward: 9,
  },
  {
    id: 9,
    name: 'Person 19',
    gender: 'Female',
    age: 25,
    location: 'Location 0',
    number: '0123456789',
    country: 'Nepal',
    status: 'Released',
    ward: 8,
  },
  {
    id: 10,
    name: 'Person 10',
    gender: 'Female',
    age: 25,
    location: 'Location 10',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 4,
  },
  {
    id: 11,
    name: 'Person 11',
    gender: 'Female',
    age: 25,
    location: 'Location 7',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 14,
  },
  {
    id: 12,
    name: 'Person 7',
    gender: 'Female',
    age: 25,
    location: 'Location 7',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 15,
  },
  {
    id: 13,
    name: 'Person 7',
    gender: 'Female',
    age: 25,
    location: 'Location 7',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 15,
  },
  {
    id: 14,
    name: 'Person 7',
    gender: 'Female',
    age: 25,
    location: 'Location 7',
    number: '0123456789',
    country: 'Nepal',
    status: 'Isolation',
    ward: 15,
  },
];
export default App;
