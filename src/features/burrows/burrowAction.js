import { fetchSingleBurrow, postNewBurrow } from "./burrowAxios";

import { toast } from "react-toastify";

export const addNewBurrowAction = (obj) => async (dispatch) => {
  const pending = postNewBurrow(obj);

  toast.promise(pending, { pending: "Please wait..." });

  const { status, message } = await pending;

  toast[status](message);

  if (status) {
    //fetch the selected book
    dispatch(fetchSingleBurrow());
  }
};
