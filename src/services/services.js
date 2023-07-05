export const getCurrentUser = () => {};
console.log(getCurrentUser);

import { publicApi } from "redux/auth/authOperations";

export const addContactApi = async (contact) => {
  return await publicApi.post("/contacts", contact).then((res) => {
    const { data } = res;
    return data;
  });
};

export const getContactApi = async () => {
  return await publicApi.get("contacts").then((res) => {
    const { data } = res;
    return data;
  });
};

export const deleteContactApi = async (id) => {
  return await publicApi.delete(`contacts/${id}`).then((res) => res.data);
};
