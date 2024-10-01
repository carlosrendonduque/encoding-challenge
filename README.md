# Encoding Challenge - React

## Overview

This project is a simple React app that encodes a block of text (up to 4 characters) into a 32-bit integer using a custom encoding scheme. The goal is to implement an algorithm that scrambles the bits of the input string and maps them into a 32-bit integer format, as per the challenge specifications.

## Live Demo

You can view the live demo of the project here:  
[https://carlosrendonduque.github.io/encoding-challenge](https://carlosrendonduque.github.io/encoding-challenge)


## Project Structure

- **src/components/EncodeBlock.js**: The main React component that handles the user input and displays the encoded value.
- **src/utils/encodeUtils.js**: Contains the utility function that performs the encoding logic.
- **src/utils/encodeUtils.test.js**: Test cases for the encoding function to ensure correct behavior.
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

2. Install the project dependencies:
    ```bash
    npm install

## Running the App

To start the app in development mode, use the following command:
    ```bash
    npm start

This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

## Running Tests

This project includes test cases to verify the correctness of the encoding function. To run the tests, use the following command:
    ```bash
    npm test

This will execute the test suite, verifying that the encodeBlock function behaves as expected based on the provided example cases.

## Example Test Cases

These are some example cases that are verified by the test suite:

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

## Code Structure

- **src/components/EncodeBlock.js**: Contains the main React component that handles user input and displays the encoded value.
- **src/utils/encodeUtils.js**: Holds the encoding logic as a utility function (`encodeBlock`), which converts a 4-character block of text into a 32-bit integer.
- **src/utils/encodeUtils.test.js**: Contains unit tests to validate the `encodeBlock` function against example cases.
- **public/**: Static files used for rendering the React app.
- **README.md**: Project documentation (this file).

## Technologies Used

- **React**: For building the user interface and managing component state.
- **Jest**: For testing the encoding logic with unit tests to ensure it produces the correct output.
- **CSS**: For styling the app in a separate `.css` file.

## Next Steps and Future Enhancements

- **Decoding Function**: Implement a function to decode the 32-bit integer back into the original text.
- **Error Handling**: Add more robust error handling for cases where input is invalid (e.g., more than 4 characters).
- **UI Improvements**: Enhance the user interface with additional styling or interactivity.
- **Performance Optimization**: Investigate performance optimizations for handling larger datasets or repeated encoding operations.

## License

This project is licensed under the MIT License. You can find the full license text in the `LICENSE` file.
