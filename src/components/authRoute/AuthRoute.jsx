import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      state={{
        location: {
          pathname: location.pathname,
        },
      }}
    />
  );
};
