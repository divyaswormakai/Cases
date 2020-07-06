import React from 'react';
import {StyleSheet, View, Text, Picker} from 'react-native';

const FilterBy = ({filterCategory, setFilterCategory}) => {
  return (
    <View style={styles.FilterByDropDown}>
      <Picker
        selectedValue={filterCategory}
        onValueChange={(itemVal, itemIndx) => setFilterCategory(itemVal)}>
        {filters.map((filter, indx) => {
          return (
            <Picker.Item label={filter} value={filter} key={'filter' + indx} />
          );
        })}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  FilterByDropDown: {
    width: '40%',
    borderColor: 'black',
    borderWidth: 1,
  },
});

const filters = ['All', 'Country', 'Gender', 'Location'];
export default FilterBy;
