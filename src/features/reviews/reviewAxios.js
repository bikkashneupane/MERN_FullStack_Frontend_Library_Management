import { apiProcessior } from "../../helper/axiosHelper";

//review api endpoint
const reviewEP = import.meta.env.VITE_APP_SERVER_API + "/library/reviews";

// post new review
export const postNewReviewAxios = async (obj) => {
  const axiosObj = {
    url: reviewEP,
    method: "POST",
    data: obj,
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

// fetch reviews
export const fetchReviewAxios = async (isPrivate) => {
  const axiosObj = {
    url: isPrivate ? reviewEP + "/all" : reviewEP,
    method: "GET",
    isPrivate,
  };

  return apiProcessior(axiosObj);
};

// update review status
export const updateReviewStatusAxios = async (obj) => {
  const axiosObj = {
    url: reviewEP,
    method: "patch",
    data: obj,
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};
