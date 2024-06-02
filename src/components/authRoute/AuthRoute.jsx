import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export const AuthRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return user?._id ? children : <Navigate to={"/login"} />;
};
