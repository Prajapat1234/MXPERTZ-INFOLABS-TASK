import React from 'react'
import Z from './Z'
import { useContext } from 'react';
import { GloballContext } from '../Components/D';

export default function Y() {
    const GlobalDataa = useContext(GloballContext);

  return (
    <div>
      <h1>Y</h1>
      <p>{GlobalDataa}</p>

      <Z/>
    </div>
  )
}
