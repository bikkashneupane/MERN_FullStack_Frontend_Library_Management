import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  publicReview: [],
  adminReview: [],
};

//create slice
const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setPublicReview: (state, { payload }) => {
      state.publicReview = payload || [];
    },
    setAdminReview: (state, { payload }) => {
      state.adminReview = payload || [];
    },
    updateReviewStatus: (state, { payload }) => {
      const { _id, status } = payload;
      state.publicReview = state.publicReview.map((item) => {
        if (item._id === _id) {
          return { ...item, status };
        }
        return item;
      });
    },
  },
});

//export reducer and action
const { reducer, actions } = reviewSlice;

export const { setPublicReview, setAdminReview, updateReviewStatus } = actions;
export default reducer;
