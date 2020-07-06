import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Status = ({statusData}) => {
  return (
    <View style={styles.footerStatus}>
      <Text>Total: {statusData.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerStatus: {},
});

export default Status;
