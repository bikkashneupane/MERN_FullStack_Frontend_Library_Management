import { Link } from "react-router-dom";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark text-white footer-custom p-3 d-flex justify-content-center align-items-center">
      &copy; All rights reserved to 2024 || Made by&nbsp;
      <Link to={"http://www.google.com"} className="nav-link">
        Bikash!!
      </Link>
    </div>
  );
};
