import { apiProcessior } from "../../helper/axiosHelper";

const privateUserAPI = import.meta.env.VITE_APP_USER_PRIVATE_EP;
const userAPI = import.meta.env.VITE_APP_USER_EP;
const signupAPI = `${userAPI}/signup`;
const loginAPI = `${userAPI}/login`;

export const signupNewUser = (signupObj) => {
  const axiosObj = {
    url: signupAPI,
    method: "POST",
    data: signupObj,
  };

  return apiProcessior(axiosObj);
};

export const loginUser = (loginObj) => {
  const axiosObj = {
    url: loginAPI,
    method: "POST",
    data: loginObj,
  };

  return apiProcessior(axiosObj);
};

//get login User profile for private user
export const fetchUserInfo = () => {
  const axiosObj = {
    url: privateUserAPI,
    method: "get",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};
