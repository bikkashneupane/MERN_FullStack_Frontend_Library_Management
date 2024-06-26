import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getAllUsersAction,
} from "../../features/user/userAction";
import { Link, useNavigate } from "react-router-dom";

export const StudentsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  return (
    <UserLayout pageTitle={"Student List"}>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Account Created</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item?.firstName} </td>
                <td>{item?.lastName} </td>
                <td>{item?.createdAt?.slice(0, 10)} </td>
                <td>{item?.role} </td>
                <td className="d-flex gap-2">
                  <Link to={`/admin/users/edit/${item?._id}`} className="w-50">
                    <Button variant="warning" className="w-100">
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() =>
                      dispatch(deleteUserAction(item?._id, navigate))
                    }
                    className="w-50"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
