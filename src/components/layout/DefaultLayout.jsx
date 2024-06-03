import { Container } from "react-bootstrap";
import { CustomNavbar } from "./CustomNavbar";
import { Footer } from "./Footer";

export const DefaultLayout = ({ pageTitle, children }) => {
  return (
    <>
      <CustomNavbar />

      <Container>
        {/* main section */}
        <div className="p-2">{pageTitle}</div>
        <main className="main">{children}</main>
      </Container>

      <Footer />
    </>
  );
};
