const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const numberPrint = document.querySelector(".calcHeaderValue");
const reset = document.querySelector(".reset");
const numberButton = document.querySelectorAll(".number");
const equalButton = document.querySelector(".operation.equal");

/* global scope variables */
let currentState = "value1";
let value1 = "";
let value2 = "";
let operationsToString = "";
let operation = "";

/* clear the calc */

const clearAll = () => {
  reset.addEventListener("click", (e) => {
    numberPrint.innerText = "";
    value1 = "";
    operationsToString = "";
    value2 = "";
    currentState = "value1";
  });
};
clearAll();
/* pressing the equal button */
equalButton.addEventListener("click", () => {
  let result = operate(operationsToString, value1, value2);
  updateScreen(result);
});

/* update the screen with numbers */
function updateScreen(result) {
  console.log(result);
  numberPrint.innerHTML = result;
}

/* calculator object*/
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
    remainder: (a, b) => a % b,
  };
  return operations[operator](a, b);
}
console.log(operate("plus", 1, 4));

/* operators */
operators.forEach((element) => {
  element.addEventListener("click", () => {
    operation = element.getAttribute("x-operation");
    operationsToString = operation.toString();
    console.log(operationsToString);
    currentState = "value2";
  });
});

/* Get values */
numberButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    let numberTarget = e.target.innerText;
    if (currentState == "value1") {
      value1 += numberTarget;
      updateScreen(value1);
    } else if (currentState == "value2") {
      value2 += numberTarget;
      updateScreen(value2);
    }
  });
});

//console.log("Info from bottom: " + operate("multiply", 1, 2));
