import React from "react";
import "./Card.css";

const Card = ({ title, data, status }) => {
  let statusColor = "";

  switch (status.toLowerCase()) {
    case "new":
      statusColor = "green";
      break;
    case "in progress":
      statusColor = "yellow";
      break;
    case "completed":
      statusColor = "red";
      break;
    default:
      statusColor = "black";
  }

  return (
    <div className="card">
      <img src={`https://ik.imagekit.io/dev24/${data?.Image}`} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <button style={{ color: statusColor }}>{status}</button>
      </div>
    </div>
  );
};

export default Card;
