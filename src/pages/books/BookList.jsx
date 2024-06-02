import { Button } from "react-bootstrap";
import { CustomBookTable } from "../../components/bookTable/CustomBookTable";
import { Link } from "react-router-dom";
import { UserLayout } from "../../components/layout/UserLayout";

export const BookList = () => {
  return (
    <UserLayout>
      <h4 className="text-center mt-4">Book List</h4>
      <div className="d-flex justify-content-end">
        <Link to={"/admin/books/add"}>
          <Button variant="primary">Add New Book</Button>
        </Link>
      </div>

      <CustomBookTable />
    </UserLayout>
  );
};
