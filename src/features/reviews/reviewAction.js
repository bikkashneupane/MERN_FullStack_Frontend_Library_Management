import { toast } from "react-toastify";
import {
  fetchReviewAxios,
  postNewReviewAxios,
  updateReviewStatusAxios,
} from "./reviewAxios";
import {
  setAdminReview,
  setPublicReview,
  updateReviewStatus,
} from "./reviewSlice";

//post review action
export const postReviewAction = (obj) => async (dispatch) => {
  const pending = postNewReviewAxios(obj);
  toast.promise(pending, { pending: "Please wait..." });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchReviewAction({ isPrivate: true }));
  }
};

//fetch review action
export const fetchReviewAction = (isPrivate) => async (dispatch) => {
  const { status, reviews } = await fetchReviewAxios(isPrivate);

  if (status === "success") {
    isPrivate
      ? dispatch(setAdminReview(reviews))
      : dispatch(setPublicReview(reviews));
  }
};

//patch review action
export const editReviewStatusAction = (obj) => async (dispatch) => {
  const pending = updateReviewStatusAxios(obj);
  toast.promise(pending, { pending: "Please wait..." });

  const { status, message, review } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(updateReviewStatus(review));
  }
};
