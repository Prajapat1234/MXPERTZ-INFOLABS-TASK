// import React, { useState, useContext, createContext } from 'react'
// // import App, { Global } from '../App'
// import X from '../Components1/X';
// export const Globall = createContext(null);


// export default function D() {
//     let [Cat, setCat] = useState("hello from D in X component")
//     // const GlobalData = useContext(Global)

//     // {props.D(Cat)}
//     return (

//         <div>
//             {/* {GlobalData} */}

//             <Globall.Provider value={Cat}>

//                 <X />
//             </Globall.Provider>
//         </div>
//     )
// }


import React, { useState, createContext } from 'react';
import X from '../Components1/X';

export const GloballContext = createContext("hello");

export default function D() {
  let [Cat, setCat] = useState("hello from D in X component");

  return (
    <div>
      <GloballContext.Provider value={Cat}>
        <X/>
      </GloballContext.Provider>
    </div>
  );
}


