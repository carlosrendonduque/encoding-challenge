// src/components/EncodeBlock.js
import React, { useState } from 'react';
import { encodeBlock } from '../utils/encodeUtils';
import './EncodeBlock.css';  // Import the CSS file

const EncodeBlock = () => {
  const [inputText, setInputText] = useState('');
  const [encodedValue, setEncodedValue] = useState(null);

  // Handle the encoding when the button is clicked
  const handleEncode = () => {
    const encoded = encodeBlock(inputText.slice(0, 4));
    setEncodedValue(encoded);
  };

  return (
    <div className="container">
      <h2>Text to 32-bit Encoder</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter up to 4 characters"
        className="input"
      />
      <button onClick={handleEncode} className="button">
        Encode
      </button>
      {encodedValue !== null && (
        <p className="result">
          Encoded 32-bit value: {encodedValue}
        </p>
      )}
    </div>
  );
};

export default EncodeBlock;
