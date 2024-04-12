// App.js



// import React, { useState } from 'react';
// import './App.css';

// export default function App() {
//   let [display, setDisplay] = useState(true);
//   let [slide, setSlide] = useState(0);

//   function toggleMenu() {
//      setTimeout(() => {
//       setDisplay(!display);
//       setSlide(display ? -200 : 0);
//       console.log(!display);
//     }, 500); 
//   }


//   return (
//     <>
//       <button onClick={toggleMenu}>menu</button>

//       {/* Overlay div */}
//       {display === false && (
//         <div className="overlay" onClick={toggleMenu}>
//            {/* <h1>SideBar</h1>'' */}
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Display</li>
//           <li>Compound</li>
//           <li>Screen</li>
//           <li>Share</li>
//           <li>Market</li>
//         </ul>
//       </div> 
//       )}

//       <div className='SideBar' style={{ left: `${slide}px` }}>
//         <h1>SideBar</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//           <li>Display</li>
//           <li>Compound</li>
//           <li>Screen</li>
//           <li>Share</li>
//           <li>Market</li>
//         </ul>
//       </div>
//     </>
//   );
// }


import React, { useState, createContext } from 'react'
// import { useContext } from 'react'
import A from './Components/A'
import X from './Components1/X';
// import { Globall } from './Components/D';

// export const Global = createContext(null);

export default function App() {



  let [Data, setData] = useState("Hello from App in D");
  // const GlobalDataa = useContext(Globall)


  return (
    <div>
      {/* <Global.Provider value={Data}> */}

      <A />
      {/* <X /> */}
      {/* </Global.Provider> */}

      {/* {GlobalDataa} */}

    </div>
  )
}
