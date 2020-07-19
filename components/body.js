import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import BodyListItem from './bodyComponents/BodyListItem';
import EditModal from './common/editModal';

const Body = ({data, allCategories}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  let count = 0;
  const GetKeyName = item => {
    count += 1;
    return `${item.name}${count}`;
  };

  const touchedListItem = item => {
    toggleModal();
    setModalData(item);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.bodyContent}>
      <FlatList
        data={data}
        keyExtractor={item => GetKeyName(item)}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => touchedListItem(item)}>
            <BodyListItem data={item} />
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet">
        <EditModal
          toggleModal={toggleModal}
          allCategories={allCategories}
          data={modalData}
        />
      </Modal>
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
