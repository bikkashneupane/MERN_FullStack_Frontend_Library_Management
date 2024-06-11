import React from "react";
import { Stars } from "../stars/Stars";

export const ReviewBlock = () => {
  return (
    <div>
      <div className="d-flex gap-2 align-items-baseline mb-2">
        <div
          className="bg-primary rounded-pill d-flex justify-content-center align-items-center   fw-bolder text-white "
          style={{ width: "40px", height: "40px" }}
        >
          PA
        </div>
        <h4 className="">Prem Acharya</h4>
      </div>
      <div className="d-flex gap-2">
        <Stars />
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
      <small> Data : 2-02-2020</small>
      <div className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        reprehenderit itaque consequuntur laboriosam velit eligendi!
      </div>
    </div>
  );
};
