import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Picker, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EditModal = ({
  toggleModal,
  allCategories,
  data,
  allWards,
  UpdateData,
  DeleteData,
}) => {
  const [gender, setGender] = useState(data.gender);
  const [status, setStatus] = useState(data.status);
  const [ward, setWard] = useState(data.ward.toString());
  const [allward, setAllWard] = useState(allWards);

  console.log(data);

  const DeleteDataInForm = async () => {
    await DeleteData(data);
    toggleModal();
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
      extraScrollHeight={200}
      viewIsInsideTabBar={true}>
      <View style={styles.modalBody}>
        <View>
          <Text style={styles.modalAddPersonFormHeaderText}>
            Edit Details: {data.name}
          </Text>
        </View>
        <Formik
          initialValues={{
            name: data.name,
            age: data.age.toString(),
            contact: data.contact.toString(),
            location: data.location,
            entryDate: data.entryDate,
            dischargeDate: data.dischargeDate,
            entryReason: data.entryReason,
            exitReason: data.exitReason,
          }}
          onSubmit={values => {
            values.gender = gender;
            values.status = status;
            values.ward = ward;
            values.id = data.id;
            UpdateData(values);
            toggleModal();
          }}>
          {props => (
            <>
              {/* Full name */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Full Name:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Full Name"
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                  />
                </View>
              </View>

              {/* Age and Gender */}
              <View style={styles.modalBodyRow}>
                {/* Age */}
                <View style={styles.modalBodyRowElement}>
                  <View style={styles.modalBodyRowInner}>
                    <View style={styles.modalBodyRowElementLabel}>
                      <Text>Age:</Text>
                    </View>
                    <View style={styles.modalBodyRowElementInput}>
                      <TextInput
                        style={styles.textInp}
                        placeholder="Age"
                        onChangeText={props.handleChange('age')}
                        value={props.values.age}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
                </View>
                {/* Sex */}
                <View style={styles.modalBodyRowElement}>
                  <View style={styles.modalBodyRowInner}>
                    <View style={styles.modalBodyRowElementLabel}>
                      <Text>Sex:</Text>
                    </View>
                    <View style={styles.modalBodyRowElementInput}>
                      <Picker
                        selectedValue={gender}
                        onValueChange={itemVal => setGender(itemVal)}>
                        {allCategories.Gender.map(gen => {
                          return (
                            <Picker.Item
                              label={gen}
                              value={gen}
                              key={'Gender' + gen}
                            />
                          );
                        })}
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>

              {/* Location */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Location:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Location"
                    onChangeText={props.handleChange('location')}
                    value={props.values.location}
                  />
                </View>
              </View>

              {/* Ward */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Ward:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <Picker
                    selectedValue={ward}
                    onValueChange={itemVal => setWard(itemVal)}>
                    {allward.map(tempWard => {
                      if (tempWard === 'All') {
                        tempWard = ' ';
                      }
                      return (
                        <Picker.Item
                          label={tempWard}
                          value={tempWard}
                          key={'ward-form:' + tempWard}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>

              {/* Contact */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Contact:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Contact Number"
                    onChangeText={props.handleChange('contact')}
                    value={props.values.contact}
                    keyboardType={'number-pad'}
                  />
                </View>
              </View>

              {/* Entry Date */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Entry Date:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Entry Date"
                    onChangeText={props.handleChange('entryDate')}
                    value={props.values.entryDate}
                  />
                </View>
              </View>

              {/* Release Date */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Release Date:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Release Date"
                    onChangeText={props.handleChange('dischargeDate')}
                    value={props.values.dischargeDate}
                  />
                </View>
              </View>

              {/* Entry Reason */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Reason for entry:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Country/Reason for Entry"
                    onChangeText={props.handleChange('entryReason')}
                    value={props.values.entryReason}
                  />
                </View>
              </View>

              {/* Discharge Reason */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Reason for Discharge:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Discharge Reason"
                    onChangeText={props.handleChange('exitReason')}
                    value={props.values.exitReason}
                  />
                </View>
              </View>

              {/* Current Status */}
              <View style={styles.modalBodyRow}>
                <View style={styles.modalBodyRowElementLabel}>
                  <Text>Current Status:</Text>
                </View>
                <View style={styles.modalBodyRowElementInput}>
                  <Picker
                    selectedValue={status}
                    onValueChange={itemVal => setStatus(itemVal)}>
                    {allCategories.Status.map(stat => {
                      return (
                        <Picker.Item
                          label={stat}
                          value={stat}
                          key={'status' + stat}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>

              {/* Buttons */}
              <View style={styles.modalBodyRow}>
                {/* Save */}
                <View style={styles.modalBodyRowElement}>
                  <View style={styles.editFormButton}>
                    <Button title="Update" onPress={props.handleSubmit} />
                  </View>
                </View>
                {/* Cancel */}
                <View style={styles.modalBodyRowElement}>
                  <View style={styles.editFormButtonDelete}>
                    <Button
                      title={'Delete'}
                      onPress={DeleteDataInForm}
                      style={styles.editFormButtonDelete}
                    />
                  </View>
                </View>
              </View>

              {/* set forms and input for all the data */}
            </>
          )}
        </Formik>

        <View style={styles.editFormButton}>
          <Button
            title={'Cancel'}
            onPress={toggleModal}
            style={styles.editFormButton}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  modalAddPersonFormHeaderText: {
    alignContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  textInp: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  modalBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  modalBodyRowInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomWidth: 0,
  },
  modalBodyRowElement: {
    width: '40%',
  },
  modalBodyRowElementLabel: {
    justifyContent: 'center',

    width: '20%',
  },
  modalBodyRowElementInput: {
    width: '60%',
  },
  editFormButton: {
    marginVertical: 5,
  },
  editFormButtonDelete: {
    marginVertical: 5,
    color: 'red',
  },
});

export default EditModal;
