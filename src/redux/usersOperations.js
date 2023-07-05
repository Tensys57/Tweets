import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648ca3738620b8bae7ed2c04.mockapi.io/";

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
