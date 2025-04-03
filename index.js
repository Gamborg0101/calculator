const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const writeNumber = document.querySelector(".calcHeaderValue");
const reset = document.querySelector(".reset");
const numberButton = document.querySelectorAll(".number");
const equalButton = document.querySelector(".operation.equal");

let currentState = "value1";
let value1 = "";
let value2 = "";
let operationsToString = "";
let operation = "";

/* clear the calc */
reset.addEventListener("click", (e) => {
  writeNumber.innerText = "";
  value1 = "";
  operationsToString = "";
  value2 = "";
  currentState = "value1";
});

equalButton.addEventListener("click", () => {
  console.log(operationsToString);
  console.log(value1);
  console.log(value2);
  console.log(operate(operationsToString, value1, value2));
});

/* calculator object*/
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
  };
  return operations[operator](a, b);
}
console.log(operate("plus", 1, 4));

/* operators */
operators.forEach((element) => {
  element.addEventListener("click", () => {
    writeNumber.innerHTML = "";
    operation = element.getAttribute("x-operation");
    operationsToString = operation.toString();
    currentState = "value2";
  });
});

/* Get values */
numberButton.forEach((element) => {
  element.addEventListener("click", (e) => {
    let numberTarget = e.target.innerText;
    if (currentState == "value1") {
      value1 += numberTarget;
      console.log("value1: " + value1);
    } else if (currentState == "value2") {
      value2 += numberTarget;
      console.log("value2: " + value2);
    }
  });
});

/* 
Så skal jeg have sendt value 1 til den. 
Så skal jeg have sendt operater til den
Så skal jeg have sendt valyue 2 til den. //DEM MODTAGER JEG ALLEREDE,FORDI DE ER GLOBALE. 
Så skal jeg køre operate funktionen. 
*/

//console.log("Info from bottom: " + operate("multiply", 1, 2));
