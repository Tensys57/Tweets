import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations";

const initialState = {
  items: [],
  arrayIsFollowed: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 3,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.page = payload;
    },

    addIsFollowed: (state, { payload }) => {
      state.arrayIsFollowed = [...state.arrayIsFollowed, payload];
    },

    deleteIsFollowed: (state, { payload }) => {
      state.arrayIsFollowed = state.arrayIsFollowed.filter(
        (id) => id !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload];
        state.error = null;
      });
  },
});
export const { changePage, addIsFollowed, deleteIsFollowed } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
