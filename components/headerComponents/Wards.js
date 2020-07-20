import React from 'react';
import {StyleSheet, View, Button, ScrollView} from 'react-native';

const Wards = ({allWards, setCurrWard}) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.headerCategories}>
        {allWards.map(ward => {
          return (
            <View style={styles.wardBtn} key={`ward-header:${ward}`}>
              <Button
                onPress={() => setCurrWard(ward)}
                title={ward.toString()}
                key={`Ward ${ward}`}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wardBtn: {
    width: 75,
    margin: 5,
  },
});

export default Wards;
