import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, TextInput, Picker} from 'react-native';
import {Formik} from 'formik';
const FormModal = ({toggleModal, SaveNewData, allCategories, allWards}) => {
  const [gender, setGender] = useState('Male');
  const [status, setStatus] = useState(allCategories.Status[0]);
  const [ward, setWard] = useState(' ');
  const [allward, setAllWard] = useState(allWards);

  return (
    <View style={styles.modalBody}>
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
            <TextInput
              placeholder="Full Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <View style={styles.modalBodyRow}>
              <View style={styles.modalBodyRowElement}>
                <TextInput
                  placeholder="Age"
                  onChangeText={props.handleChange('age')}
                  value={props.values.age}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.modalBodyRowElement}>
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

            <TextInput
              placeholder="Location"
              onChangeText={props.handleChange('location')}
              value={props.values.location}
            />

            <TextInput
              placeholder="Contact Number"
              onChangeText={props.handleChange('contact')}
              value={props.values.contact}
              keyboardType={'number-pad'}
            />

            <TextInput
              placeholder="Entry Date"
              onChangeText={props.handleChange('entryDate')}
              value={props.values.entryDate}
            />

            <TextInput
              placeholder="Release Date"
              onChangeText={props.handleChange('dischargeDate')}
              value={props.values.dischargeDate}
            />

            <TextInput
              placeholder="Country/Reason for Entry"
              onChangeText={props.handleChange('entryReason')}
              value={props.values.entryReason}
            />

            <TextInput
              placeholder="Discharge Reason"
              onChangeText={props.handleChange('exitReason')}
              value={props.values.exitReason}
            />

            <View>
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

            <View>
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

            <Button title="Submit" onPress={props.handleSubmit} />
            {/* set forms and input for all the data */}
          </>
        )}
      </Formik>
      <Button title={'EXIT'} onPress={toggleModal} />
    </View>
  );
};

// {
//   status: 'Quarantine',
//   ward: 1,
// },

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalBodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBodyRowElement: {
    width: '40%',
  },
});

export default FormModal;
