import { fetchUsers, addUser, deleteUser } from "./usersOperations";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  arrayIsFollowed: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 3,

  // filter: "",
};
// const handlePending = (state) => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // changeFilter: (state, action) => {
    //   state.filter = action.payload + 1;
    // },

    // toggleIsFollowed: (state, action) => {
    //   const userId = action.payload;
    //   const user = state.items.find((user) => user.id === userId);
    //   if (user) {
    //     user.isFollowed = !user.isFollowed;
    //     state.user = { ...state.user };
    //   }
    // },

    // toggleFollowing: (state, action) => {
    //   const userId = action.payload;
    //   const user = state.items.find((user) => user.id === userId);
    //   if (user) {
    //     {
    //       user.isFollowed
    //         ? (user.followers = user.followers + 1)
    //         : (user.followers = user.followers - 1);
    //     }
    //   }
    // },

    changePage: (state, action) => {
      state.page = action.payload + 1;
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
      // .addCase(addUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(deleteUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(addUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      // .addCase(deleteUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, ...payload];
        state.error = null;
      });
    // .addCase(addUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // })
    // .addCase(deleteUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     (user) => user.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // });
  },
});
export const {
  // changeFilter,
  // toggleIsFollowed,
  // toggleFollowing,
  changePage,
  addIsFollowed,
  deleteIsFollowed,
} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
