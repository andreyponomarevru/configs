const config = {
  env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true
  },
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    "react",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};

module.exports = config;
