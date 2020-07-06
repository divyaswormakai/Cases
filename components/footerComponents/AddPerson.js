import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const AddPerson = ({toggleModal}) => {
  return (
    <View style={styles.addBtn}>
      <Button title="Add Btn" onPress={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {},
});

export default AddPerson;
