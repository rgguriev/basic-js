const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDir) {
    this.isDir = isDir;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Error");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      let pos = (i - count) % key.length;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + key.charCodeAt(pos)) % 26 + 65)
      } else {
        result += message[i];
        count++
      }
    }

    return this.isDir == false ? result.split('').reverse().join('') : result;
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Error");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      let pos = (i - count) % key.length;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        result += String.fromCharCode((message.charCodeAt(i) + 26 - key.charCodeAt(pos)) % 26 + 65);
      } else {
        result += message[i];
        count++;
      }
    }

    return this.isDir == false ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;