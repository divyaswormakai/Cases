import React, {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import Status from './footerComponents/Status';
import AddPerson from './footerComponents/AddPerson';
import FormModal from './common/modal';

const Footer = ({SaveNewData, statusData, allCategories}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.footerContent}>
      <Status statusData={statusData} style={styles.footerStatus} />
      <AddPerson style={styles.footerAddPerson} toggleModal={toggleModal} />
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet">
        <FormModal
          toggleModal={toggleModal}
          SaveNewData={SaveNewData}
          allCategories={allCategories}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerStatus: {},
});

export default Footer;
