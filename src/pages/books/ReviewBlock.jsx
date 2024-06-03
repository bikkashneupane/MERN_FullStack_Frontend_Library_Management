import React from "react";
import { Stars } from "../../components/stars/Stars";

export const ReviewBlock = () => {
  return (
    <div>
      <div className="d-flex gap-2 align-items-baseline mb-2">
        <div
          className="bg-primary rounded-pill d-flex justify-content-center align-items-center fw-bolder text-white"
          style={{ width: "40px", height: "40px" }}
        >
          BN
        </div>
        <h4>Bikash Neupane</h4>
      </div>
      <div className="d-flex gap-2 align-items-baseline">
        <Stars stars={3.5} />
        <h4>title </h4>
      </div>
      <small>Date: 2024-04-11</small>
      <div className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates
        harum adipisci numquam architecto quaerat, hic excepturi debitis aliquam
        dignissimos! Optio, voluptas quos consequuntur eius minus ullam corporis
        ea nisi repellat unde, deleniti laboriosam impedit quo. Neque harum at
        temporibus iure voluptates fugiat laborum hic? Iste deleniti in
        voluptatem illo!
      </div>
    </div>
  );
};
