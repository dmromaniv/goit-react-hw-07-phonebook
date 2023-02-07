import axios from 'axios';

axios.defaults.baseURL = 'https://63e27c913e12b19376412298.mockapi.io';

export async function fetchAllContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContact(newContact) {
  const response = await axios.post('/contacts', newContact);

  return response;
}

export async function deleteContactById(id) {
  await axios.delete(`/contacts/${id}`);
}
