import { fetchBurrows, postNewBurrow, returnBurrowBook } from "./burrowAxios";

import { getAllBooksAction } from "../books/bookAction";
import { setBurrows } from "./burrowSlice";
import { toast } from "react-toastify";

// post new book borrow request
export const addNewBurrowAction = (borrowObj) => async (dispatch) => {
  const pending = postNewBurrow(borrowObj);
  toast.promise(pending, { pending: "Please wait..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(getAllBooksAction());
  }
};

// fetch all burrow book action
export const fetchBurrowsAction = () => async (dispatch) => {
  const { status, burrows } = await fetchBurrows();

  if (status === "success") {
    dispatch(setBurrows(burrows));
  }
};

// return (put) burrow action
export const returnBurrowsAction = (obj) => async (dispatch) => {
  const pending = returnBurrowBook(obj);
  toast.promise(pending, { pending: "Please wait..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status) {
    dispatch(getAllBooksAction());
    dispatch(fetchBurrowsAction());
  }
};
