import React from 'react';
import {StyleSheet, View, Button, ScrollView} from 'react-native';

const Categories = ({categories, setCurrentCategory}) => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.headerCategories}>
        {categories.length > 0
          ? categories.map(category => {
              return (
                <View style={styles.categoryBtn} key={category}>
                  <Button
                    title={category}
                    onPress={() => setCurrentCategory(category)}
                  />
                </View>
              );
            })
          : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerCategories: {
    flexDirection: 'row',
  },
  categoryBtn: {
    width: 250,
    margin: 5,
  },
});

export default Categories;
