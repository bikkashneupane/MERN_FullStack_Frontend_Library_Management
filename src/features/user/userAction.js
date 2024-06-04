//middle actions between login and axios

import { fetchUserInfo, loginUser } from "./userAxios";

import { getNewAccessJWT } from "../../helper/axiosHelper";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

//this will update state in redux store using dispatche
export const getUserObj = () => async (dispatch) => {
  const { user, status, message } = await fetchUserInfo();
  // console.log(user, status, message);

  //update redux store
  dispatch(setUser(user));
};

export const loginUserAction = (loginObj) => async (dispatch) => {
  const loginPending = loginUser(loginObj);

  toast.promise(loginPending, { pending: "Authenticating credentials...." });

  const { status, message, tokens } = await loginPending;
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);

    dispatch(getUserObj());
  }
  return status, tokens;
};

//auto login
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  //when access JWT exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  //when access do not exist but refresh JWT
  if (refreshJWT) {
    const token = await getNewAccessJWT();

    token && dispatch(getUserObj());
  }
};
