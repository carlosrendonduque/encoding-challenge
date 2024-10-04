// src/components/EncodeBlock.js
import React, { useState } from 'react';
import { encodeBlock, encode, decode } from '../utils/encodeUtils';
import './EncodeBlock.css'; // Import the existing CSS file

const EncodeBlock = () => {
  const [inputText, setInputText] = useState('');
  const [encodedValue, setEncodedValue] = useState(null);
  const [decodedValue, setDecodedValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [challengePart, setChallengePart] = useState(1); // Default to Part 1

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setErrorMessage(''); // Clear error message on input change
  };

  const handleEncode = () => {
    setDecodedValue(''); // Clear the decoded value when encoding

    if (inputText.trim() === '') {
      setErrorMessage('Please enter some text to encode.'); // Show error if no input
      return;
    }

    if (challengePart === 1) {
      const encoded = encodeBlock(inputText.slice(0, 4)); // Part 1 logic: only take first 4 characters
      setEncodedValue(encoded);
    } else if (challengePart === 2) {
      const encodedArray = encode(inputText); // Part 2 logic: use entire string
      setEncodedValue(encodedArray);
    }
  };

  const handleDecode = () => {
    if (challengePart === 2 && encodedValue) {
      const decoded = decode(encodedValue);
      setDecodedValue(decoded);
    }
  };

  const handlePartSwitch = (part) => {
    setChallengePart(part);
    setInputText('');
    setEncodedValue(null);
    setDecodedValue('');
    setErrorMessage(''); // Clear error message on part switch
  };

  return (
    <div className="container">
      {/* Art+Logic logo */}
      <img
        src={`${process.env.PUBLIC_URL}/artLogic-logo.webp`}
        alt="Art+Logic Logo"
        className="logo"
      />

      <h1>Encoding Challenge</h1>

      {/* Butterfly image */}
      <img
        src={`${process.env.PUBLIC_URL}/butterfly-full.webp`}
        alt="Butterfly"
        className="butterfly-image"
      />

      <div>
        <button onClick={() => handlePartSwitch(1)} className="button">
          Part 1
        </button>
        <button onClick={() => handlePartSwitch(2)} className="button">
          Part 2
        </button>
      </div>

      <h3>
        Text to {challengePart === 1 ? '32-bit Encoder' : 'Multi-block Encoder'}
      </h3>

      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        className="input"
      />

      <button onClick={handleEncode} className="button">
        Encode
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}

      {encodedValue && (
        <div className="result">
          <h4>Encoded {challengePart === 1 ? '32-bit value' : 'Array'}:</h4>
          <p>
            {challengePart === 1
              ? encodedValue
              : `[${encodedValue.join(', ')}]`}
          </p>
        </div>
      )}

      {challengePart === 2 && (
        <div>
          <button
            onClick={handleDecode}
            className="button"
            disabled={!encodedValue}
          >
            Decode
          </button>

          {decodedValue && (
            <div className="result">
              <h4>Decoded String:</h4>
              <p>{decodedValue}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EncodeBlock;
