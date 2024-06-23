import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../features/user/userAction";

export const StudentsList = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state.userInfo);

  console.log(allUsers);

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
                <td>
                  <Button variant="danger">Delete User</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
