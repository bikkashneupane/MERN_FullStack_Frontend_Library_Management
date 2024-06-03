import { Col, Container, Row } from "react-bootstrap";

import { AuthRoute } from "../authRoute/AuthRoute";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { useSelector } from "react-redux";

export const UserLayout = ({ pageTitle, children }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <>
      <AuthRoute>
        <div>
          <Header />
          {/* main-section */}
          <Container fluid>
            <Row>
              <Col xs={3} className="bg-dark text-light pt-3">
                <div>
                  Welcome {user?.firstName} {user?.lastName}
                </div>
                <hr />
                <SideNav />
              </Col>

              <Col className="p-0">
                <div className="p-2">
                  {pageTitle} <hr />
                </div>
                <main className="main mb-5 ps-2 pe-2">{children}</main>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </AuthRoute>
    </>
  );
};
