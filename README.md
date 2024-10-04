# Encoding Challenge - React

## Overview

This project is a React app that encodes text using two different schemes:

1. **Part 1**: Encodes a block of text (up to 4 characters) into a 32-bit integer using a custom encoding scheme.
2. **Part 2**: Encodes and decodes full strings into arrays of 32-bit integers, then decodes them back to the original string.

The goal is to implement algorithms that scramble and restore bits of input strings, mapping them into and out of a 32-bit integer format.

## Live Demo

You can view the live demo of the project here:  
[https://carlosrendonduque.github.io/encoding-challenge](https://carlosrendonduque.github.io/encoding-challenge)

## Project Structure

- **src/components/EncodeBlock.js**: The main React component that handles the user input and displays the encoded value.
- **src/utils/encodeUtils.js**: Contains utility functions that perform the encoding/decoding logic.
- **src/utils/encodeUtils.test.js**: Test cases for both encoding and decoding functions.
- **public/**: Static files used for rendering the React app.
- **README.md**: Project documentation (this file).

## Setup

### Prerequisites
- You must have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/encoding-challenge.git
   cd encoding-challenge
    ```

2. Install the project dependencies:
    ```bash
    npm install
    ```

## Running the App

To start the app in development mode, use the following command:

```bash
npm start
```


This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.


## Switching Between Part 1 and Part 2

The app provides buttons to switch between Part 1 (4-character block encoding) and Part 2 (full string encoding and decoding). Simply click the respective button to switch modes.

- **Part 1**: Encodes blocks of 4 characters to a 32-bit integer.
- **Part 2**: Encodes a full string to an array of 32-bit integers and decodes it back to the original string.

## Running Tests

This project includes test cases to verify the correctness of both the encoding and decoding functions. To run the tests, use the following command:

```bash
npm test
```

This will execute the test suite, verifying that the encodeBlock function behaves as expected based on the provided example cases.

## Example Test Cases

### Part 1: 4-character Block Encoding

| Raw Characters | Encoded Value (decimal) |
| -------------- | ----------------------- |
| "foo"          | 124807030                |
| " foo"         | 250662636                |
| "foot"         | 267939702                |
| "BIRD"         | 251930706                |
| "...."         | 15794160                 |
| "^^^^"         | 252706800                |
| "Woot"         | 266956663                |
| "no"           | 53490482                 |

### Part 2: Full String Encoding and Decoding

| Raw String                                   | Encoded Value (decimal)                                                     |
| ---------------------------------------------| --------------------------------------------------------------------------- |
| "tacocat"	                                   | [267487694, 125043731]                                                      |
| "never odd or even"                          | [267657050, 233917524, 234374596, 250875466, 17830160]                      |
| "lager, sir, is regal"                       | [267394382, 167322264, 66212897, 200937635, 267422503]                      |
| "go hang a salami, I'm a lasagna hog"        | [200319795, 133178981, 234094669, 267441422, 78666124, ...]                 |
| "egad, a base tone denotes a bad age"        | [267389735, 82841860, 267651166, 250793668, 233835785, ...]                 |

 

## Code Structure

- **src/components/EncodeBlock.js**: Contains the main React component that handles user input and displays the encoded value.
- **src/utils/encodeUtils.js**: Holds the encoding and decoding logic as utility functions (encodeBlock, encode, decode).
- **src/utils/encodeUtils.test.js**: Contains unit tests to validate the encoding/decoding functions.
- **public/**: Static files used for rendering the React app.
- **README.md**: Project documentation (this file).



## Technologies Used

- **React**: For building the user interface and managing component state.
- **Jest**: For testing the encoding logic with unit tests to ensure it produces the correct output.
- **CSS**: For styling the app in a separate `.css` file.

## Next Steps and Future Enhancements

- **Performance Optimization**: Investigate performance optimizations for handling larger datasets or repeated encoding operations.
- **UI Improvements**: Further enhance the UI to make it more user-friendly.

## License

This project is licensed under the MIT License.