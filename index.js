const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const writeNumber = document.querySelector(".calcHeaderValue");
const reset = document.querySelector(".reset");
const numberButton = document.querySelectorAll(".number");

let currentState = "value1";
let value1 = "";
let value2 = "";

/* clear the calc */
reset.addEventListener("click", (e) => {
  writeNumber.innerText = "";
  value1 = "";
  value2 = "";
  currentState = "value1";
});

/* calculator object*/
function operate(operator, a, b) {
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
  };
  return operations[operator](a, b);
}

/* operators */
operators.forEach((element) => {
  element.addEventListener("click", () => {
    let operation = element.getAttribute("x-operation");
    let operationToString = operation.toString();
    currentState = "value2";
    writeNumber.innerHTML = "";

    //console.log(operate(operationToString, value1, value2));
  });
});

/* Get values */
numberButton.forEach((element) => {
  element.addEventListener("click", (e, operationToString) => {
    let numberTarget = e.target.innerText;
    if (currentState == "value1") {
      value1 += numberTarget;
      console.log("int one: " + value1);
    } else if (currentState == "value2") {
      value2 += numberTarget;
      console.log("int two: " + value2);
    }
    console.log("final values: ", value1, value2, operationToString);
  });
});

//console.log("Info from bottom: " + operate("multiply", 1, 2));
