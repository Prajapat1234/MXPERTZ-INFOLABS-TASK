import React, { useRef } from 'react';

const MiniForm = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSave = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    console.log('Save:', { name, description });
    // You can perform save logic here
  };

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;

    console.log('Submit:', { name, description });
   };

   

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <label>
          Description:
          <textarea ref={descriptionRef}></textarea>
         </label>
        <br />
      </form>

      <button onClick={handleSave}>Save</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MiniForm;
