module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["jsx-a11y", "@typescript-eslint", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
  // overrides: [
  //   {
  //     files: ["*.js"],
  //     rules: {
  //       "@typescript-eslint/no-var-requires": "off"
  //     }
  //   }
  // ]
};