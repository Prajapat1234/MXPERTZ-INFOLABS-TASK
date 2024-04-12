import React from 'react';
import Y from './Y';
import "./X.css"
// import { useContext } from 'react';
// import { GloballContext } from '../Components/D';

export default function X() {
//   const GlobalDataa = useContext(GloballContext);

  return (
    <div>
      <h1>X</h1>
      {/* <p>{GlobalDataa}</p> */}
      <Y />
    </div>
  );
}
