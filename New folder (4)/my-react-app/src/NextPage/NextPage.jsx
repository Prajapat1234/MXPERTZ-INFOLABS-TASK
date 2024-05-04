import React, { useEffect, useState } from "react";
import "./NextPage.css";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import NextCard from "../Display/NextCard";
 export default function NextPage() {
  const [nextPage, setNextPage] = useState([]);
  // const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("https://child.onrender.com/api/sciencefiction")
      .then((response) => {
        setNextPage(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <h1 id="NextHeading">
        <span>The Lost City Of&nbsp;</span> Future&nbsp;Earth
      </h1>

      <div id="NextButtons">
        <button>Word Explorer</button>
        <button>Story Adventure</button>
        <button>Brain Quest</button>
      </div>

      <p id="NextParagraph">
        Drag Pictures to the matching Words, light up correct pairs, shake for a
        retry
      </p>

      <div id="NextMain">
      <div id="LeftBox">
        <h1>Correction</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ut architecto non pariatur doloremque in id vero .</p>
        <img src="https://img.freepik.com/free-photo/young-teacher-helping-her-students-class_23-2148633379.jpg" alt="" />
        <h6>Synonym</h6>
        <h6>Antonymn</h6>
        <div id="Arrows">
        <ArrowBackIcon style={{background:'gray',borderRadius:'50%'}}/>
        <ArrowForwardIcon style={{background:'gray',borderRadius:'50%'}}/>
        </div>
      </div>
        
        {nextPage.map((item) => (
          <NextCard key={item._id} title={item.Title} data={item} />
        ))}
      </div>
    </>
  );
}
