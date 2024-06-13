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
      //update public review
      console.log(payload);
      state.publicReview.find((item) => item._id === payload._id)
        ? state.publicReview.pop((item) => item._id === payload._id)
        : state.publicReview.push(payload);

      //update admin review status
      state.adminReview = state.adminReview.map((item) => {
        if (item._id === payload._id) {
          return { ...item, status: payload.status };
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
