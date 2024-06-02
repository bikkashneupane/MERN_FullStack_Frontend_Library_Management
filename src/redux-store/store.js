import bookReducer from "../features/books/bookSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//configure store
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});

export default store;
