import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { getAllBooksAction } from "../../features/books/bookAction";

const isPrivate = true;

export const CustomBookTable = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  return (
    <>
      <div className="p-5">
        <div className="d-flex justify-content-between mt-4">
          <p>{books.length} books found</p>
          <input
            type="text"
            placeholder="Search book by name..."
            className="rounded-2"
          />
        </div>
        <div className="mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Book</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td className="d-flex justify-content-center">
                      <img src={book.thumbnail} width={"70px"} alt="" />
                      {/* //add a toggle to change status from book.status
                      I will define thefunction to update myself */}
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
                      <div className="d-flex flex-column justify-content-center gap-2">
                        <Button variant="warning">
                          <Link
                            to={`/admin/books/edit/${book._id}`}
                            className="nav-link"
                          >
                            <i className="bi bi-pen-fill"></i> Edit
                          </Link>{" "}
                        </Button>

                        <Button variant="danger">
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
    </>
  );
};
