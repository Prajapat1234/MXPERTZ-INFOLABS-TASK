import React from "react";
import "./Card.css";

const NextCard = ({ title, data }) => {
  return (
    <div className="card">
      <img src={`https://ik.imagekit.io/dev24/${data?.Image}`} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
         
      </div>
    </div>
  );
};

export default NextCard;
