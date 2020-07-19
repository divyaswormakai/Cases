import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from './headerComponents/SearchBar';
import FilterBy from './headerComponents/FilterBy';
import Categories from './headerComponents/Categories';
import Wards from './headerComponents/Wards';
const Header = ({
  setSearchName,
  searchName,
  filterCategory,
  setFilterCategory,
  categories,
  setCurrentCategory,
  allWards,
  setCurrWard,
}) => {
  return (
    <View style={styles.headerContent}>
      <View style={styles.rowContent}>
        <SearchBar setSearchName={setSearchName} searchName={searchName} />
        <FilterBy
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      </View>
      <View style={styles.rowContent}>
        <Categories
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />
      </View>
      <View style={styles.rowContent}>
        <Wards allWards={allWards} setCurrWard={setCurrWard} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
