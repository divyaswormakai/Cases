import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Picker, Text} from 'react-native';
import {Formik} from 'formik';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FormModal = ({toggleModal, SaveNewData, allCategories, allWards}) => {
  const [gender, setGender] = useState('Male');
  const [status, setStatus] = useState(allCategories.Status[0]);
  const [ward, setWard] = useState(' ');
  const [allward, setAllWard] = useState(allWards);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}
      extraScrollHeight={200}
      viewIsInsideTabBar={true}>
      <View style={styles.modalBody}>
        <View>
          <Text style={styles.modalAddPersonFormHeaderText}>Add A Person</Text>
        </View>
        <Formik
          initialValues={{
            name: '',
            age: 0,
            contact: '',
            location: '',
            entryDate: '',
            dischargeDate: '',
            entryReason: '',
            exitReason: '',
          }}
          onSubmit={values => {
            values.gender = gender;
            values.status = status;
            values.ward = ward;
            SaveNewData(values);
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                        underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    underlineColorAndroid={'rgba(0,0,255,0.2)'}
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
                    <Button title="Save" onPress={props.handleSubmit} />
                  </View>
                </View>
                {/* Cancel */}
                <View style={styles.modalBodyRowElement}>
                  <View style={styles.editFormButton}>
                    <Button
                      title={'Cancel'}
                      onPress={toggleModal}
                      style={styles.editFormButton}
                    />
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
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
    marginVertical: '1%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingBottom: '1%',
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
    marginVertical: '1%',
  },
  editFormButtonDelete: {
    marginVertical: 5,
    color: 'red',
  },
});

export default FormModal;
