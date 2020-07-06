import {StyleSheet} from 'react-native';

const ItemStyle = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    flexDirection: 'column',
    marginVertical: 3,
    padding: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ItemStyle;
