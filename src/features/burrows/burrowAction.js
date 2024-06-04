import { fetchBurrows, postNewBurrow, returnBurrowBook } from "./burrowAxios";

import { getAllBooksAction } from "../books/bookAction";
import { setBurrows } from "./burrowSlice";
import { toast } from "react-toastify";

export const addNewBurrowAction = (borrowObj) => async (dispatch) => {
  const pending = postNewBurrow(borrowObj);

  toast.promise(pending, { pending: "Please wait..." });

  const { status, message } = await pending;

  toast[status](message);

  if (status) {
    //fetch the selected book
    // dispatch(fetchSingleBurrow(borrowObj.bookId));
    dispatch(getAllBooksAction());
  }
};

export const fetchBurrowsAction = () => async (dispatch) => {
  const { status, burrows } = await fetchBurrows();

  if (status === "success") {
    dispatch(setBurrows(burrows));
  }
};

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
