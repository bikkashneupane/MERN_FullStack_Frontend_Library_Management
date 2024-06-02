import { Col, Container, Row } from "react-bootstrap";

import { AuthRoute } from "../authRoute/AuthRoute";
import { CustomNavbar } from "./CustomNavbar";
import { Footer } from "./Footer";
import { SideNav } from "./SideNav";
import { useSelector } from "react-redux";

export const UserLayout = ({ pageTitle, children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <>
      <AuthRoute>
        <CustomNavbar />
        {/* main-section */}
        <Container fluid>
          <Row>
            <Col xs={3} className="bg-dark text-light pt-3">
              <div className="">
                Welcome {user?.firstName}
                <hr />
              </div>
              <SideNav />
            </Col>
            <Col className="p-0">
              <div className="p-2">
                {pageTitle}
                <hr />
              </div>
              <div className="main p-3">{children}</div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </AuthRoute>
    </>
  );
};
