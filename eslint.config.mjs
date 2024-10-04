import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";
import babelParser from "@babel/eslint-parser"; // Import Babel parser

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      parser: babelParser, // Use Babel parser for JSX
      parserOptions: {
        requireConfigFile: false, // Allows parsing without a Babel config file
        babelOptions: {
          presets: ["@babel/preset-react"], // Add preset for React
        },
      },
    },
    plugins: {
      jest: pluginJest,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginJest.configs.recommended.rules,
    },
  },
];
