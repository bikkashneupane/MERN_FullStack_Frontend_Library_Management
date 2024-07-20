import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  editReviewStatusAction,
  fetchReviewAction,
} from "../../features/reviews/reviewAction";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Reviews = () => {
  const dispatch = useDispatch();
  const { adminReview } = useSelector((state) => state.reviewInfo);

  useEffect(() => {
    dispatch(fetchReviewAction({ isPrivate: true }));
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { checked, value } = e.target;
    dispatch(
      editReviewStatusAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };

  return (
    <UserLayout pageTitle={"All Reviews"}>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <p>{adminReview.length} reviews found</p>
        </div>

        <div>
          <Table striped bordered hover className="">
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Thumbnail</th>
                <th>Book Title</th>
                <th>User Name</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminReview.map(
                (
                  {
                    _id,
                    thumbnail,
                    title,
                    message,
                    userName,
                    bookTitle,
                    bookId,
                    status,
                  },
                  i
                ) => {
                  return (
                    <tr key={_id}>
                      <td>{i + 1}</td>
                      <td>
                        <Form.Check
                          type="switch"
                          checked={status === "active"}
                          onChange={handleOnChange}
                          value={_id}
                        />
                        {status}
                      </td>
                      <td>
                        <Link to={`/books/${bookId}`}>
                          <img src={thumbnail} width={"60px"} alt="" />
                        </Link>
                      </td>
                      <td>
                        <div>
                          <h4>{bookTitle?.slice(0, 30)}</h4>
                        </div>
                      </td>
                      <td>
                        <strong>{userName}</strong>
                      </td>

                      <td>
                        <div>
                          <h5>{title}</h5>
                          <p>{message?.slice(0, 50)}...</p>
                        </div>
                      </td>
                      <td>
                        <div className="min-h-100 flex justify-content-center">
                          <Button variant="danger w-100">
                            <i className="bi bi-trash"> </i> Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </UserLayout>
  );
};
