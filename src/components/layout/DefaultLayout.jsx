import { CustomNavbar } from "./CustomNavbar";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <CustomNavbar />

      {/* main section */}
      <div className="main">{children}</div>

      <Footer />
    </>
  );
};
