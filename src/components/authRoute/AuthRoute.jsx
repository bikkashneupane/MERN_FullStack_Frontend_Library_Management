import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userInfo);

  if (!user?._id) {
    // Show a loading indicator or similar until user state is determined
    return <div>Loading...</div>;
  }

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
