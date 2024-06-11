import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CustomForm } from "../customForm.jsx/CustomForm";
import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { postReviewAction } from "../../features/reviews/reviewAction";

export const ReviewForm = ({ burrow, setBurrow }) => {
  const dispatch = useDispatch();
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, bookId, bookTitle, userId, userName, thumbnail } = burrow;
    const reviewObj = {
      ...form,
      bookId,
      bookTitle,
      userId,
      userName,
      burrowId: _id,
      ratings,
      thumbnail,
    };

    dispatch(postReviewAction(reviewObj));
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomForm
          label="Title"
          name="title"
          type="text"
          required
          placeholder="Awesome book"
          onChange={handleOnChange}
        />

        <div className="mb-3">
          <label htmlFor="">Select Star: </label>
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
          type="text"
          as="textarea"
          required
          rows="5"
          placeholder="Write detail review"
          onChange={handleOnChange}
        />

        <div className="d-grid py-2">
          <Button type="submit">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
