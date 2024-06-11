import bookReducer from "../features/books/bookSlice";
import burrowReducer from "../features/burrows/burrowSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import reviewReducer from "../features/reviews/reviewSlice";

//configure store
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
    reviewInfo: reviewReducer,
  },
});

export default store;
