import bookReducer from "../features/books/bookSlice";
import burrowReducer from "../features/burrows/burrowSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//configure store
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
    burrowInfo: burrowReducer,
  },
});

export default store;
