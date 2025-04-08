const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const numberPrint = document.querySelector(".calc-header-value");
const reset = document.querySelector(".reset");
const numberButton = document.querySelectorAll(".number");
const equalButton = document.querySelector(".operation.equal");
const delButton = document.querySelector(".del");
const funButton = document.querySelector(".empty");
const keyboardArea = document.querySelector(".calc-container");
const calcScreenSize = document.querySelector(".calc-screen");
const intSize = document.querySelector(".calc-header-value");

numberButton.forEach((element) => {
  element.addEventListener("click", () => {
    if (calcScreenSize.clientWidth < intSize.clientWidth) {
      const currentFontSize = window.getComputedStyle(intSize).fontSize;
      let slicedCurrentFontSize = Number(currentFontSize.slice(0, 2));
      intSize.style.fontSize = slicedCurrentFontSize * 0.75 + "px";
    }
  });
});

/* global scope variables */
let currentState = "value1";
let value1 = "";
let value2 = "";
let operationsToString = "";
let operation = "";

funButton.addEventListener("click", () => {
  numberPrint.innerHTML = "80085";
});

/* DEL button  */
delButton.addEventListener("click", () => {
  if (currentState == "value1") {
    let value1Sliced = value1.slice(0, -1);
    value1 = value1Sliced;
    numberPrint.innerText = value1;
    return value1;
  } else if (currentState == "value2") {
    let value2Sliced = value2.slice(0, -1);
    value2 = value2Sliced;
    numberPrint.innerText = value2;
    return value2;
  } else if (value1 && value2) {
    value1 = "";
    value2 = "";
    return;
  }
});

/* clear the calc */
reset.addEventListener("click", (e) => {
  intSize.style.fontSize = "76px";
  numberPrint.innerText = "";
  value1 = "";
  operationsToString = "";
  value2 = "";
  currentState = "value1";
});

/* pressing the equal button */
equalButton.addEventListener("click", () => {
  let result = operate(operationsToString, value1, value2);
  value1 = result;
  value2 = "";
  updateScreen(result);
});

/* update the screen with numbers */
function updateScreen(result) {
  // console.log(result);
  numberPrint.innerHTML = result;
}

/* calculator object*/
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  if (a == 0 && operator == "division" && b == 0) {
    return (numberPrint.innerHTML = "Yeah right");
  }
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
    remainder: (a, b) => a % b,
  };
  return operations[operator](a, b);
}

/* operators */
operators.forEach((element) => {
  element.addEventListener("click", () => {
    operation = element.getAttribute("x-operation");
    operationsToString = operation.toString();
    currentState = "value2";
    if (value1 && value2) {
      let result = operate(operationsToString, value1, value2);
      value1 = result.toString();
      value2 = "";
      updateScreen(result);
    }
  });
});

/* get values */
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
