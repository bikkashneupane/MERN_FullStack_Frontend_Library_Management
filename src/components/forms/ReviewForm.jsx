import Button from "react-bootstrap/Button";
import { CustomForm } from "../customForm.jsx/CustomForm";
import { FaStar } from "react-icons/fa6";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const ReviewForm = ({ burrow }) => {
  const [form, handleOnChange] = useState({});
  const [ratings, setRatings] = useState(1);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { _id, userId, bookId, userName } = burrow;
    const obj = {
      ...form,
      ratings,
      burrowId: _id,
      userId,
      bookId,
      userName,
    };
    console.log(obj);
  };

  return (
    <div>
      <h3>Give your review</h3>
      <Form onSubmit={handleOnSubmit}>
        <CustomForm
          label="Title"
          name="title"
          type="text"
          placeholder="Awesome book"
          onChange={handleOnChange}
        />

        <div className="mb-2" onChange={handleOnChange}>
          <label htmlFor="">Select Stars: </label>
          {new Array(5).fill("").map((item, i) => (
            <FaStar
              key={i}
              onClick={() => setRatings(i + 1)}
              className={i < ratings ? "text-warning" : ""}
            />
          ))}
        </div>

        <CustomForm
          label="Message"
          name="message"
          as="textarea"
          rows={5}
          placeholder="Write detail review"
          onChange={handleOnChange}
        />

        <div className="d-grid">
          <Button type="submit">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
