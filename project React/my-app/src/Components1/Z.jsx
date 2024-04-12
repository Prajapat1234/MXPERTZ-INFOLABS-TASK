import React from 'react'
import { useContext } from 'react';
import { GloballContext } from '../Components/D';

export default function Z() {
    const GlobalDataa = useContext(GloballContext);

  return (
    <div>
      <h1>Z</h1>
              <p>{GlobalDataa}</p>

    </div>
  )
}
