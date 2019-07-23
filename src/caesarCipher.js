const isLowerCase = char => char === char.toLowerCase();

const isUpperCase = char => char === char.toUpperCase();

const format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
const isSpecialChar = char => format.test(char);

const caesarCipher = (string, key) => {
  let encrypted = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < string.length; i++) {
    if (isSpecialChar(string[i])) {
      encrypted += string[i];
    } else if (isLowerCase(string[i])) {
      encrypted += String.fromCharCode((((string.charCodeAt(i) + key) - 97) % 26) + 97);
    } else if (isUpperCase(string[i])) {
      encrypted += String.fromCharCode((((string.charCodeAt(i) + key) - 65) % 26) + 65);
    } else {
      encrypted += string[i];
    }
  }

  return encrypted;
};

module.exports = caesarCipher;
