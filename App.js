/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
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
    Location: [],
    Country: [],
  });
  const [categories, setCategories] = useState([]);
  //maybe for highlighting for future
  const [currCategory, setCurrCategory] = useState('');
  //total data that will be available
  const [wholePopulation, setWholePopulation] = useState([]);
  //total people that will be shown
  const [people, setPeople] = useState([]);

  //inital render of the app
  useEffect(() => {
    setWholePopulation(dummyData);
    setPeople(dummyData);
    findAllCategories(dummyData, setAllCategories);
  }, []);

  //change people according to the search
  useEffect(() => {
    FindPeopleWithSearch(searchName, wholePopulation, setPeople);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  //Change categories when Filter category is changed
  useEffect(() => {
    DifferentiateCategory(
      filterCategory,
      allCategories,
      setCategories,
      setCurrCategory,
    );
    if (filterCategory === 'All') {
      setPeople(wholePopulation);
    }
    //so that default value is not preserved during filter changing
    else {
      setPeople([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategory, wholePopulation]);

  const setCurrentCategory = value => {
    setCurrCategory(value);
    SelectCurrentCategoryPeople(
      wholePopulation,
      setPeople,
      value,
      filterCategory,
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
      />
      <Body data={people} />
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
  let temp = [''];
  //for age
  cats.Gender = genders;
  //for country
  dummyData.map(data => {
    if (!temp.includes(data.country)) {
      temp.push(data.country);
    }
  });
  cats.Country = temp;
  temp = [''];
  //for Location
  dummyData.map(data => {
    if (!temp.includes(data.location)) {
      temp.push(data.location);
    }
  });
  cats.Location = temp;
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
    case 'Country': {
      temp = allCategories.Country;
      break;
    }
    case 'Gender': {
      temp = allCategories.Gender;
      break;
    }
    case 'Location': {
      temp = allCategories.Location;
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
) => {
  let selectedPeople = [];
  console.log('PEople classification started');
  if (filterCategory === 'Country') {
    selectedPeople = wholePopulation.filter(
      population => population.country === currCategory,
    );
  } else if (filterCategory === 'Gender') {
    console.log('Gender classification');
    selectedPeople = wholePopulation.filter(
      population => population.gender === currCategory,
    );
  } else if (filterCategory === 'Location') {
    selectedPeople = wholePopulation.filter(
      population => population.location === currCategory,
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
  setPeople(selectedPeople);
};

const genders = ['Male', 'Female'];

const dummyData = [
  {
    name: 'Person 1',
    gender: 'Male',
    age: 30,
    location: 'Location 1',
    number: '0123456789',
    country: 'Nepal',
  },
  {
    name: 'Person 2',
    gender: 'Male',
    age: 25,
    location: 'Location 2',
    number: '0123456789',
    country: 'India',
  },
  {
    name: 'Person 3',
    gender: 'Female',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'Kuwait',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'USA',
  },
  {
    name: 'Person 3',
    gender: 'Female',
    age: 25,
    location: 'Location 2',
    number: '0123456789',
    country: 'India',
  },
  {
    name: 'Person 3',
    gender: 'Female',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'China',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'UAE',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 4',
    number: '0123456789',
    country: 'Qatar',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 5',
    number: '0123456789',
    country: 'Saudi Arabia',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 1',
    number: '0123456789',
    country: 'UK',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 8',
    number: '0123456789',
    country: 'Portugal',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 6',
    number: '0123456789',
    country: 'Spain',
  },
  {
    name: 'Person 3',
    gender: 'Male',
    age: 25,
    location: 'Location 3',
    number: '0123456789',
    country: 'Qatar',
  },
];
export default App;
