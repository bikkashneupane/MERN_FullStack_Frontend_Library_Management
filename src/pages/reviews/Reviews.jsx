import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviewAction } from "../../features/reviews/reviewAction";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Reviews = () => {
  const { adminReview } = useSelector((state) => state.reviewInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviewAction({ isPrivate: true }));
  }, [dispatch]);

  console.log(adminReview);

  return (
    <UserLayout pageTitle={"All Reviews"}>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <p>{adminReview.length} reviews found</p>
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Thumbnail</th>
                <th>Book Title</th>
                <th>User Name</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminReview.map((book, i) => {
                return (
                  <tr key={book._id}>
                    <td>{i + 1}</td>
                    <td className="d-flex justify-content-center">
                      <img src={book.thumbnail} width={"70px"} alt="" />
                    </td>
                    <td>
                      <div>
                        <h2>{book.title.slice(0, 30)}</h2>
                        <div>{book.author}</div>
                        <div
                          className={
                            book.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          Status: {book.status}
                        </div>
                      </div>
                    </td>
                    <td>
                      <Button variant="danger w-50">
                        <i className="bi bi-trash"> </i> Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </UserLayout>
  );
};
