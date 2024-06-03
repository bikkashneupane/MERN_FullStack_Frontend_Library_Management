import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import React from "react";

const maxRating = 5;
export const Stars = ({ stars = 0 }) => {
  const ratings = [];

  if (stars > maxRating) {
    return "Invalid Ratings";
  }

  const fullRating = Math.floor(stars);
  const hasHalf = stars - fullRating >= 0.5;

  //   for (let i = 0; i < fullRating; i++) {
  //     ratings.push(<FaStar className="text-warning " />);
  //   }

  //   if (hasHalf) {
  //     ratings.push(<FaRegStarHalfStroke className="text-warning " />);
  //   }

  //   while (ratings.length < 5) {
  //     ratings.push(<FaStar />);
  //   }

  for (let i = 0; i < maxRating; i++) {
    if (i < fullRating) {
      ratings.push(<FaStar key={i} className="text-warning" />);
    } else if (i === fullRating && hasHalf) {
      ratings.push(<FaRegStarHalfStroke key={i} className="text-warning" />);
    } else {
      ratings.push(<FaStar key={i} />);
    }
  }

  return <div className="fs-2">{ratings}</div>;
};
