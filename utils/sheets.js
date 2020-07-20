import axios from 'axios';

const path = 'https://api.apispreadsheets.com/data/845/';

export const AddtoSheet = async data => {
  try {
    let temp = {
      data: {
        id: data.id,
        name: data.name,
        age: data.age.toString(),
        gender: data.gender,
        location: data.location,
        contact: data.contact,
        entryDate: data.entryDate,
        dischargeDate: data.dischargeDate,
        entryReason: data.entryReason,
        exitReason: data.exitReason,
        ward: data.ward.toString(),
        status: data.status,
      },
    };
    await axios.post(path, temp);
    console.log('Added to sheets');
  } catch (err) {
    console.log(err);
  }
};

export const UpdateToSheet = async data => {
  try {
    console.log('------------');
    console.log(data.id);
    let query = `select*from845whereid='${data.id}'`;
    let temp = {
      id: data.id,
      name: data.name,
      age: data.age.toString(),
      gender: data.gender,
      location: data.location,
      contact: data.contact,
      entryDate: data.entryDate,
      dischargeDate: data.dischargeDate,
      entryReason: data.entryReason,
      exitReason: data.exitReason,
      ward: data.ward.toString(),
      status: data.status,
    };
    let body = {
      data: temp,
      query: query,
    };
    console.log(body);

    await axios.post(path, body);
    console.log('Updated');
  } catch (err) {
    console.log('--------------error updating--------------');
    console.log(err);
  }
};

export const DeleteFromSheet = async data => {
  try {
    let query = `?query=deletefrom845whereid='${data.id}'`;
    let url = path + query;
    let response = await axios.get(url);
    console.log(response.data.message);
  } catch (err) {
    console.log(err);
  }
};
