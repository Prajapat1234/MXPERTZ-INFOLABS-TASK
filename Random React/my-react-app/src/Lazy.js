import React, { useRef, useState } from 'react';
import './LazyComponent.css'; 

const LazyComponent = () => {
  const messageRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete?');

    if (shouldDelete) {
      setShowPopup(true);
      messageRef.current.innerText = 'Your confirmation done!';
    } else {
      console.log('Cancelled');
      messageRef.current.innerText = 'Cancelled!';
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Lazy-loaded component</h2>
      <h1 ref={messageRef}></h1>
      <button onClick={handleDelete}>Click me</button>

      {showPopup && (
        <div className="popup">
          <p>operation Confirmed!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default LazyComponent;
