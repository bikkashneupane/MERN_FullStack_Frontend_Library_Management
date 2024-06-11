import { Button } from "react-bootstrap";
import { CustomBookTable } from "../../components/bookTable/CustomBookTable";
import { Link } from "react-router-dom";
import { UserLayout } from "../../components/layout/UserLayout";

export const BookList = () => {
  return (
    <UserLayout pageTitle={"Book List"}>
      <div className="text-end  mb-3">
        <Link to={"/admin/books/add"}>
          <Button variant="primary">Add New Book</Button>
        </Link>
      </div>

      <CustomBookTable />
    </UserLayout>
  );
};
