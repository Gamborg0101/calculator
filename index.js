const firstNumberColumn = document.querySelector(".first-number-column");
const buttons = document.querySelectorAll("button");
const screenLocation = document.querySelector(".calc-screen");
const operators = document.querySelectorAll(".operation");

operators.forEach((element) => {
  element.addEventListener("click", () => {
    let operation = element.getAttribute("x-operation");
    let operationToString = operation.toString();
    console.log(mathTable[operationToString]);
  });
});

let mathTable = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  division: (a, b) => a / b,
};

let screenNumbers = document.createElement("p");
screenNumbers.classList.add("screen-number");
screenNumbers.innerText = "";
screenLocation.appendChild(screenNumbers);

let firstValue = "";

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    screenNumbers.innerText += element.innerText;
    firstValue = screenNumbers.innerText;
    console.log(firstValue);
  });
});
