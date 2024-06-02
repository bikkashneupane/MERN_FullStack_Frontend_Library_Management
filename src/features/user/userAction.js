//middle actions between login and axios

import { fetchUserInfo } from "./userAxios";
import { setUser } from "./userSlice";

//this will update state in redux store using dispatche

export const getUserObj = () => async (dispatch) => {
  const { user, status, message } = await fetchUserInfo();
  console.log(user, status, message);

  //update redux store
  dispatch(setUser(user));
};
