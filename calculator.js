// calculator.js
function add(a, b) {
  //console.log("Adding from Clone-1");
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

module.exports = { add, subtract, multiply, divide };


function square(a) {
  return a * a;
}
module.exports = { add, subtract, multiply, divide, square };// version 1.1
function modulo(a, b){ return a % b; }
console.log("Calculator loaded");
// final version

// work in progress