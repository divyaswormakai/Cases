import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const Categories = ({categories, setCurrentCategory}) => {
  return (
    <View style={styles.headerCategories}>
      {categories.length > 0
        ? categories.map(category => {
            return (
              <Button
                title={category}
                onPress={() => setCurrentCategory(category)}
              />
            );
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerCategories: {
    flexDirection: 'row',
  },
});

export default Categories;
