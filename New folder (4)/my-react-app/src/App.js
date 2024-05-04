import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter,Route ,Routes} from "react-router-dom";
import DisplayCard from "./Display/DisplayCard";
// import Heading from "./Heading/Heading";
import NextPage from "./NextPage/NextPage";
export default function App() {
  return (
     
      <BrowserRouter>
      <Navbar />
       
        <Routes>
        {/* <Route path="/" element={<Heading/>} /> */}
        <Route path="/" element={<DisplayCard/>} />
        <Route path="/NextPage" element={<NextPage/>} />
        </Routes>
      </BrowserRouter>
     
  );
}

