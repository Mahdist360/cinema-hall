import React from "react";
import star from "../assets/star.svg";

const Rating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1 mb-5">
      {Array(rating)
        .fill(null)
        .map((v, i) => (
          <img key={i} src={star} width="14" height="14" alt="" />
        ))}
    </div>
  );
};

export default Rating;
