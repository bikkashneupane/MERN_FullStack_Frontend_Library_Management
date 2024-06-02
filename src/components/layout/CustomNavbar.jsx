import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <Navbar className="d-flex justify-content-between p-4 outline-remove shadow-lg bg-dark text-light">
      <div className="">Frontend</div>
      <div className="d-flex justify-content-between gap-4">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/signup"} className="nav-link">
          Signup
        </Link>
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
      </div>
    </Navbar>
  );
};
