import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648ca3738620b8bae7ed2c04.mockapi.io/";
// let page = 1;
// const limit = 3;

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users", {
        params: {
          page: thunkAPI.getState().users.page,
          limit: thunkAPI.getState().users.limit,
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users", user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/users/${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// -------------------------------------------------------------------------------

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   addContactApi,
//   getContactApi,
//   deleteContactApi,
// } from "services/contactsService";

// export const addContact = createAsyncThunk(
//   "contact/add",
//   async (form, thunkApi) => {
//     try {
//       const contact = await addContactApi(form);
//       return contact;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getContact = createAsyncThunk(
//   "contact/get",
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getContactApi();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contact/remove",
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteContactApi(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
