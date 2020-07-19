import React from 'react';
import {View, Text} from 'react-native';
import ItemStyle from './BodyListItemStyle';

const BodyListItem = ({data}) => {
  return (
    <View style={ItemStyle.item}>
      <View style={ItemStyle.itemRow}>
        <Text>Name: {data.name}</Text>
        <Text>{data.number}</Text>
      </View>
      <View style={ItemStyle.itemRow}>
        <Text>Age: {data.age}</Text>
        <Text>
          Ward: {data.ward.toString() === '15' ? 'Others' : data.ward}
        </Text>
        <Text>Gender: {data.gender}</Text>
        <Text>{data.location}</Text>
      </View>
    </View>
  );
};

export default BodyListItem;
