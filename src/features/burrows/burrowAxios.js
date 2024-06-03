import { apiProcessior } from "../../helper/axiosHelper";

// http://localhost:8000/library/Burrows
const BurrowAPI = import.meta.env.VITE_APP_BURROW_EP;

// post new Burrow
export const postNewBurrow = (obj) => {
  const axiosObj = {
    url: BurrowAPI,
    method: "post",
    data: obj,
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

//post edit Burrow
export const putEditBurrow = async (BurrowObj) => {
  const axiosObj = {
    method: "put",
    url: BurrowAPI,
    data: BurrowObj,
    isPrivate: true,
  };

  return await apiProcessior(axiosObj);
};

//get all Burrows
export const fetchAllBurrows = () => {
  const axiosObj = {
    url: BurrowAPI,
    method: "get",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

//if isPrivate = true, api = /Burrows/all
//if isPrivate = false, api = /Burrows
export const fetchBurrows = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? `${BurrowAPI}/all` : BurrowAPI,
    isPrivate: true,
  };

  return await apiProcessior(axiosObj);
};

//get a single Burrow to edit
export const fetchSingleBurrow = async (_id) => {
  const axiosObj = {
    method: "get",
    url: BurrowAPI + "/" + _id,
  };

  return await apiProcessior(axiosObj);
};
