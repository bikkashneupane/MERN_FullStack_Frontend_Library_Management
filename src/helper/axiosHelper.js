import axios from "axios";

const serverAPI = import.meta.env.VITE_APP_SERVER_API;
const newAccessAPI = `${serverAPI}/library/users/new-access`;

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefressJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessior = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshJWT,
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshJWT
        ? getRefressJWT()
        : getAccessJWT()
      : null,
  };
  try {
    const response = await axios({ url, method, data, headers });
    return response.data;
  } catch (error) {
    console.log(error);
    const message = error?.response?.data?.message ?? error.message;

    if (message === "jwt expired") {
      //now user uses refreshJWT to request new accessJWT
      const token = await getNewAccessJWT();

      //re-call back api processor
      if (token) {
        console.log("Token in error: ", token);
        return apiProcessior({ method, url, data, isPrivate });
      }

      console.log("Deleting token now:   CHECKCCCCCCC");
      //clear the tokens
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT");
    }
    return {
      status: "error",
      message,
    };
  }
};

// request new access Token
export const getNewAccessJWT = async () => {
  const { accessJWT } = await apiProcessior({
    url: newAccessAPI,
    method: "get",
    isPrivate: true,
    isRefreshJWT: true,
  });

  console.log("Line 66 of axiosHelper: ", accessJWT);
  accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
  console.log(
    "Line 68 , getting accessJWT from sessionStorage ",
    sessionStorage.getItem("accessWT")
  );

  return accessJWT;
};
