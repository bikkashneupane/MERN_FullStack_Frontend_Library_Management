import {
  deleteSingleBook,
  fetchBooks,
  fetchSingleBook,
  postNewBook,
} from "./bookAxios";
import { setBook, setSelectedBook } from "./bookSlice";

import { toast } from "react-toastify";

// add new book action
export const addNewBookAction = async (bookObj) => {
  const pendingBook = postNewBook(bookObj);
  toast.promise(pendingBook, { pending: "Adding book...." });

  const { status, message } = await pendingBook;
  toast[status](message);
  console.log(status);
  return { status };
};

// get all books action
export const getAllBooksAction = (isPrivate) => async (dispatch) => {
  const { status, books } = await fetchBooks(isPrivate);
  if (status) {
    dispatch(setBook(books));
  }
};

//get single book to edit
export const getSingleBooksAction = (_id) => async (dispatch) => {
  const { status, books } = await fetchSingleBook(_id);
  if (status) {
    dispatch(setSelectedBook(books));
  }
};

// delete single book
export const deleteBookAction = (_id) => async (dispatch) => {
  const { status, message } = await deleteSingleBook(_id);

  if (status === "success") {
    dispatch(setBook());
  }
};
