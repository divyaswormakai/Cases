import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Picker} from 'react-native';
import {Formik} from 'formik';
const EditModal = ({toggleModal, allCategories, data}) => {
  const [gender, setGender] = useState(data.gender);
  const [location, setLocation] = useState(data.location);
  const [country, setCountry] = useState(data.country);

  return (
    <View style={styles.modalBody}>
      <Formik
        initialValues={{
          name: data.name,
          gender: data.gender,
          contact: data.number,
          reasons: '',
          age: data.age.toString(),
        }}
        onSubmit={values => {
          values.gender = gender;
          values.location = location;
          values.country = country;
          toggleModal();
          console.log(values);
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
              <View style={styles.modalBodyRowElement}>
                <TextInput
                  placeholder="Age"
                  //   keyboardType="number-pad"
                  onChangeText={props.handleChange('age')}
                  value={props.values.age}
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

export default EditModal;
