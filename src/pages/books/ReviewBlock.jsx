import React from "react";
import { Stars } from "../../components/stars/Stars";
import { useSelector } from "react-redux";

export const ReviewBlock = () => {
  const { publicReview } = useSelector((state) => state.reviewInfo);
  return (
    <div className="mb-5">
      {publicReview?.map(
        ({ _id, userName, title, ratings, message, createdAt }) => {
          return (
            <div key={_id} className="mb-2">
              <div className="d-flex gap-2 align-items-baseline mb-2">
                <div
                  className="bg-primary rounded-pill d-flex justify-content-center align-items-center fw-bolder text-white"
                  style={{ width: "40px", height: "40px" }}
                >
                  {userName[0]}
                </div>
                <h4>{userName}</h4>
              </div>
              <div className="d-flex gap-2 align-items-baseline">
                <Stars stars={ratings} />
                <h4>{title} </h4>
              </div>
              <small>Date: {createdAt?.slice(0, 10)}</small>
              <div className="mt-2">{message}</div>
            </div>
          );
        }
      )}
    </div>
  );
};
