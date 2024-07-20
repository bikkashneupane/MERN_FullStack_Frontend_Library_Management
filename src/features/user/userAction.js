//middle actions between login and axios
import {
  deleteUser,
  fetchAllUsers,
  fetchUserInfo,
  loginUser,
  updateUser,
} from "./userAxios";

import { getNewAccessJWT } from "../../helper/axiosHelper";
import { setAllUsers, setUser } from "./userSlice";
import { toast } from "react-toastify";

//this will update state in redux store using dispatche
export const getUserObj = () => async (dispatch) => {
  const { user } = await fetchUserInfo();

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

// get all users
export const getAllUsersAction = () => async (dispatch) => {
  const { users } = await fetchAllUsers();
  //update redux store
  dispatch(setAllUsers(users));
};

// update user action
export const updateUserAction =
  (obj, isAdmin, navigate) => async (dispatch) => {
    const updatePending = updateUser(obj);
    toast.promise(updatePending, { pending: "Please wait...." });

    const { status, message } = await updatePending;
    toast[status](message);

    if (status === "success") {
      dispatch(getUserObj());
      if (isAdmin) {
        dispatch(getAllUsersAction());
        navigate("/admin/students");
      }
    }
  };

// delete user action
export const deleteUserAction = (_id, navigate) => async (dispatch) => {
  const deletePending = deleteUser(_id);
  toast.promise(deletePending, { pending: "Please wait...." });

  const { status, message } = await deletePending;
  toast[status](message, { position: "bottom-right" });

  if (status === "success") {
    dispatch(getAllUsersAction());
    navigate("/admin/students");
  }
};
