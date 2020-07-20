import firebase from 'firebase';

export const saveDataFirebase = async data => {
  console.log(data);
  try {
    await firebase
      .database()
      .ref('People/')
      .push(data);
    console.log('SAVED');
  } catch (err) {
    console.log(err);
  }
};

export const getAllDataFirebase = async () => {
  let peopleArr = [];
  await firebase
    .database()
    .ref('People/')
    .once('value', snapshot => {
      if (snapshot.val() !== null && snapshot.val() !== undefined) {
        let temp = Object.entries(snapshot.val());
        temp.forEach(element => {
          element[1].id = element[0];
          peopleArr.push(element[1]);
        });
        console.log(peopleArr);
      }
    });
  return peopleArr;
};

export const UpdateDataFirebase = async data => {
  let person = `People/${data.id}/`;
  console.log(person);
  delete data.id;
  console.log(data);
  await firebase
    .database()
    .ref(person)
    .update(data);

  console.log('Update Completed');
};

export const DeleteDataFirebase = async data => {
  let person = `People/${data.id}/`;
  await firebase
    .database()
    .ref(person)
    .remove();

  console.log('Delete');
};
