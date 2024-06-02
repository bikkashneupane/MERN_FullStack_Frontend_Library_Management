import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { Link } from "react-router-dom";
import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { addNewBookAction } from "../../features/books/bookAction";
import { useForm } from "../../hooks/useForm";

export const AddBook = () => {
  const { form, handleOnChange } = useForm();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewBookAction(form);
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Book Title",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Author Name",
      required: true,
    },
    {
      label: "ISBN",
      name: "isbn",
      type: "number",
      placeholder: "ISBN info..",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "text",
      placeholder: "url",
    },
    {
      label: "Published Year",
      name: "publishedYear",
      type: "number",
      placeholder: "Published Year",
      required: true,
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      maxLength: "5000",
      required: true,
      placeholder: "Book Summary....",
      rows: 5,
    },
  ];

  return (
    <UserLayout>
      <Container className="mb-5 mt-5">
        <h2 className="text-center">Add New Book</h2>
        {/* <Row>
          <Col>
            <div>
              <Link to={"/admin/books"}>
                <Button variant="secondary">&lt; Back</Button>
              </Link>
            </div>
          </Col>
        </Row> */}
        <Row>
          <Col className=" mt-2 d-flex justify-content-center">
            <div
              className="w-75 rounded-5 shadow-lg p-5 "
              style={{
                background: "linear-gradient(to right, pink, white)",
              }}
            >
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, index) => (
                  <CustomForm key={index} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid pt-2">
                  <Button type="submit">Add Book</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </UserLayout>
  );
};
