import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />

      <Container>
        {/* main section */}
        <div className="p-2">{pageTitle}</div>
        <main className="main">{children}</main>
      </Container>

      <Footer />
    </>
  );
};
