import firebase from 'firebase';

export const saveDataFirebase = async data => {
  console.log(data);
  try {
    const res = await firebase
      .database()
      .ref('People/')
      .push(data);
    console.log(res);
    console.log('SAVED');
    const tempArr = res.toString().split('/');
    return tempArr[tempArr.length - 1];
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
      }
    });
  return peopleArr;
};

export const UpdateDataFirebase = async data => {
  let person = `People/${data.id}/`;
  const temp = {...data};
  delete temp.id;
  await firebase
    .database()
    .ref(person)
    .update(temp);

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
