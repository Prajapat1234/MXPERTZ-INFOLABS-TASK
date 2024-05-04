import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Display.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom"
const DisplayCard = () => {
  const [scienceFictionItems, setScienceFictionItems] = useState([]);
  // const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((response) => {
        setScienceFictionItems(response.data.slice(0, 8));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleNext = () => {};
  const handlePrevious = () => {};

  return (
    <>
      <h1 id="HeadingLine">Science Fiction Stories</h1>

      <div id="ProgressButtons">
        <Button id="New" startIcon={<AccountCircleIcon />}>
          New
        </Button>
        <Button id="Progress" startIcon={<AccountCircleIcon />}>
          In Progress
        </Button>
        <Button id="Completed" startIcon={<AccountCircleIcon />}>
          Completed
        </Button>
        <Button id="Clear" startIcon={<AccountCircleIcon />}>
          Clear All
        </Button>
      </div>
      <div id="DisplayMain">
        {scienceFictionItems.map((item) => (
          <Card
            key={item._id}
            title={item.Title}
            status={item.Status}
            data={item}
          />
        ))}
      </div>
      <div id="PreviousNext">
       
        <IconButton onClick={handlePrevious}>
          <ArrowBackIcon />
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(4, 70, 141, 0.5) 20%, #38c7ff 50%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Previous
          </span>
        </IconButton>
         
          <Link to='/NextPage'>
        <IconButton onClick={handleNext}>
          <span
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(4, 70, 141, 0.5) 20%, #38c7ff 50%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Next
          </span>
          <ArrowForwardIcon />
        </IconButton>
        </Link>
      </div>
    </>
  );
};

export default DisplayCard;
