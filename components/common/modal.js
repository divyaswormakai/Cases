import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Picker} from 'react-native';
import {Formik} from 'formik';
const FormModal = ({toggleModal, SaveNewData, allCategories}) => {
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState(allCategories.Location[0]);
  const [country, setCountry] = useState(allCategories.Country[0]);

  return (
    <View style={styles.modalBody}>
      <Formik
        initialValues={{
          name: '',
          gender: 'Male',
          age: 0,
          contact: '',
          reasons: '',
        }}
        onSubmit={values => {
          values.gender = gender;
          values.location = location;
          values.country = country;
          SaveNewData(values);
          toggleModal();
        }}>
        {props => (
          <>
            <TextInput
              placeholder="Full Name"
              onChangeText={props.handleChange('name')}
              value={props.values.title}
            />
            <View style={styles.modalBodyRow}>
              <View style={styles.modalBodyRowElement}>
                <Picker
                  selectedValue={gender}
                  onValueChange={itemVal => setGender(itemVal)}>
                  {allCategories.Gender.map(gender => {
                    return (
                      <Picker.Item
                        label={gender}
                        value={gender}
                        key={'Gender' + gender}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={styles.modalBodyRowElement}>
                <TextInput
                  placeholder="Age"
                  onChangeText={props.handleChange('age')}
                  value={props.values.age}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <View style={styles.modalBodyRow}>
              <View style={styles.modalBodyRowElement}>
                <TextInput
                  placeholder="Location"
                  onChangeText={text => setLocation(text)}
                  value={location}
                />
              </View>
              <View style={styles.modalBodyRowElement}>
                <Picker
                  selectedValue={location}
                  onValueChange={itemVal => setLocation(itemVal)}>
                  {allCategories.Location.map(loc => {
                    return (
                      <Picker.Item
                        label={loc}
                        value={loc}
                        key={'location' + loc}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>

            <View style={styles.modalBodyRow}>
              <View style={styles.modalBodyRowElement}>
                <TextInput
                  placeholder="Country"
                  onChangeText={text => setCountry(text)}
                  value={country}
                />
              </View>
              <View style={styles.modalBodyRowElement}>
                <Picker
                  selectedValue={country}
                  onValueChange={itemVal => setCountry(itemVal)}>
                  {allCategories.Country.map(loc => {
                    return (
                      <Picker.Item
                        label={loc}
                        value={loc}
                        key={'location' + loc}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>

            <TextInput
              placeholder="Contact Number"
              onChangeText={props.handleChange('contact')}
              value={props.values.contact}
              keyboardType={'number-pad'}
            />

            {/* <TextInput
              placeholder="Entry Reason"
              onChangeText={props.handleChange('reason')}
              value={props.values.reason}
            /> */}

            <Button title="Submit" onPress={props.handleSubmit} />
            {/* set forms and input for all the data */}
          </>
        )}
      </Formik>
      <Button title={'EXIT'} onPress={toggleModal} />
    </View>
  );
};

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
