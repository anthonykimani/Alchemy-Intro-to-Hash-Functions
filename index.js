const { SHA256 } = require("crypto-js");

const message = "Hello , please hide this message";
const address = 32432332;

const hashedMessage = SHA256( message + address );

console.log(hashedMessage);