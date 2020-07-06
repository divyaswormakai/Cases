import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const SearchBar = ({setSearchName, searchName}) => {
  return (
    <View>
      <TextInput
        onChangeText={text => setSearchName(text)}
        value={searchName}
        style={styles.headerSearchBar}
        placeholder="Search by Name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerSearchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    minWidth: '60%',
  },
});

export default SearchBar;
