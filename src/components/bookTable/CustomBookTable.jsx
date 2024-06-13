import React, { useEffect } from "react";
import {
  deleteBookAction,
  getAllBooksAction,
} from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const isPrivate = true;

export const CustomBookTable = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    dispatch(deleteBookAction(_id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <p>{books.length} books found</p>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search book by name..."
          />
        </div>
      </div>

      <div>
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Book Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => {
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
                    <div className="d-flex gap-2">
                      <Button variant="warning w-50">
                        <Link
                          to={`/admin/books/edit/${book._id}`}
                          className="nav-link"
                        >
                          <i className="bi bi-pen-fill"></i> Edit
                        </Link>{" "}
                      </Button>

                      <Button
                        variant="danger w-50"
                        onClick={() => handleOnDelete(book._id)}
                      >
                        <i className="bi bi-trash"> </i> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
