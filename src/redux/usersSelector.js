// import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.users.filter;

export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectIsFollowed = (state, userId) => {
  let user = state.users.items.find((item) => item.id === userId);
  if (user === "undefined") {
    user = false;
  }
  return user ? user.isFollowed : false;
};
export const selectError = (state) => state.users.error;
export const selectPage = (state) => state.users.page;

export const selectArrayIsFollowed = (state) => state.users.arrayIsFollowed;
