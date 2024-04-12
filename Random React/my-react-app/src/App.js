// App.js
import React, { lazy, Suspense, useRef } from 'react';
import MiniForm from './MiniForm.js';
const LazyComponent = lazy(() => import('./Lazy.js'));

const App = () => {
  const lazyComponentRef = useRef(null);

  const loadLazyComponent = () => {
    lazyComponentRef.current.innerText = 'clicked on this !';
  };



  return (
    <div>
      <h1>Main Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent ref={lazyComponentRef} />
      <MiniForm/>
      </Suspense>
      {/* <button onClick={loadLazyComponent}>Load Lazy Component 5</button> */}
    </div>

  );
};

export default App;
