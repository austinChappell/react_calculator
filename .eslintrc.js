module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    window: true,
  },
  rules: {
    strict: 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0, // disabling this in favor or passing in default props for presentational components
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
  },
};
