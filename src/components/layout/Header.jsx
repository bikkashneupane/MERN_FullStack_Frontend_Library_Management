import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <Navbar expand="md" variant="dark" className="bg-dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Book Library
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <i className="fa-solid fa-house"></i> Dashboard
                </Link>
                <Link className="nav-link" to="/">
                  <i className="fa-solid fa-house"></i> Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  {" "}
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>
                <Link className="nav-link" to="/signup">
                  <i className="fa-solid fa-user"></i> SignUp
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
