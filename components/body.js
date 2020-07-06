import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import BodyListItem from './bodyComponents/BodyListItem';

const Body = ({data}) => {
  let count = 0;
  const GetKeyName = item => {
    count += 1;
    return `${item.name}${count}`;
  };
  return (
    <View style={styles.bodyContent}>
      <FlatList
        data={data}
        renderItem={({item}) => <BodyListItem data={item} />}
        keyExtractor={item => GetKeyName(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContent: {
    flex: 5,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Body;
