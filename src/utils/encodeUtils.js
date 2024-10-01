// src/utils/encodeUtils.js

// Utility function to encode a block of text into a 32-bit integer
export const encodeBlock = (text) => {
    // Ensure the text is 4 characters long by padding with '\0' if necessary
    text = text.padEnd(4, '\0');
  
    // Convert each character to its ASCII value
    let asciiValues = [];
    for (let i = 0; i < 4; i++) {
      asciiValues.push(text.charCodeAt(i));
    }
  
    // Initialize the 32-bit result integer
    let encodedValue = 0;
  
    // Scramble the bits
    for (let i = 0; i < 4; i++) {
      let charValue = asciiValues[i];
  
      for (let bitPosition = 0; bitPosition < 8; bitPosition++) {
        // Extract the bit at `bitPosition` in `charValue`
        let bit = (charValue >> bitPosition) & 1;
  
        // Compute the final position in the 32-bit integer
        let scrambledPosition = bitPosition * 4 + i;
  
        // Set the bit in the correct position in the 32-bit result
        encodedValue |= (bit << scrambledPosition);
      }
    }
  
    return encodedValue;
  };
  