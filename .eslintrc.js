module.exports = {
  "extends": "airbnb-base",
  "env": {
    "jest": true,
    "browser": true,
    "es6": true,
  },
  "globals": {
    "Atomics": 'readonly',
    "SharedArrayBuffer": 'readonly',
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": 'module',
  },
  "rules": {}
};