import React from "react";
import "./Navbar.css";
 
export default function Navbar() {
  return (
    <>
      <nav>
        <h1>BrainyLingo</h1>

        <ul>
          <li>
            <a href="">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Leaderboard</a>
          </li>
          <li>
            {" "}
            <a href="">Daily Quiz</a>
          </li>
          <li>
            <a href="">Genre</a>
          </li>
        </ul>

        <button id="SignOut">Sign Out</button>
      </nav>

      
    </>
  );
}
