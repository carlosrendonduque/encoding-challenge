// src/utils/encodeUtils.js
// Utility function to encode a block of text into a 32-bit integer (Part 1 logic)
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
      encodedValue |= bit << scrambledPosition;
    }
  }

  return encodedValue;
};

// Part 2: encode a full string into an array of 32-bit integers
export const encode = (input) => {
  let encodedBlocks = [];

  // Process the input in 4-character chunks
  for (let i = 0; i < input.length; i += 4) {
    let block = input.substring(i, i + 4);
    encodedBlocks.push(encodeBlock(block));
  }

  return encodedBlocks;
};

// Part 2: decode an array of 32-bit integers back into the original string
export const decode = (encodedBlocks) => {
  let decodedString = '';

  // Decode each 32-bit block
  encodedBlocks.forEach((block) => {
    for (let i = 0; i < 4; i++) {
      let charValue = 0;

      // Reconstruct the character from the scrambled bits
      for (let bitPosition = 0; bitPosition < 8; bitPosition++) {
        let scrambledPosition = bitPosition * 4 + i;
        let bit = (block >> scrambledPosition) & 1;
        charValue |= bit << bitPosition;
      }

      // Append the character to the result string if it's not a null character
      if (charValue !== 0) {
        decodedString += String.fromCharCode(charValue);
      }
    }
  });

  return decodedString;
};

// Switcher for Part 1 and Part 2 encoding
export const encodeSwitcher = (input, part) => {
  if (part === 1) {
    return encodeBlock(input);
  } else if (part === 2) {
    return encode(input);
  }
};
