import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="focus-input">
      <h3>Focus Input (useRef &amp; DOM)</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
};

export default FocusInput;