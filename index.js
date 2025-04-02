const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operation");
const writeNumber = document.querySelector(".calcHeaderValue");
const reset = document.querySelector(".reset");
const numberButton = document.querySelectorAll(".number");

/* Clear */
reset.addEventListener("click", (e) => {
  return (writeNumber.innerText = "");
});
/* Operators  */
operators.forEach((element) => {
  element.addEventListener("click", () => {
    let operation = element.getAttribute("x-operation");
    let operationToString = operation.toString();
    //console.log(mathTable[operationToString]);
    //console.log(opreate("plus", value1, b));
  });
});

let state = "value1";
let value1 = "";
let value2 = "";
/* Number inputs */
if (state == "value1") {
  numberButton.forEach((element) => {
    element.addEventListener("click", (e) => {
      let numberTarget = e.target.innerText;
      writeNumber.innerHTML += numberTarget;
      value1 = parseInt(writeNumber.innerHTML);
      console.log(value1);
    });
  });
}

/* Calculator object*/
function operate(operator, a, b) {
  const operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    division: (a, b) => a / b,
  };
  return operations[operator](a, b);
}
console.log("Info from bottom: " + operate("multiply", 1, 2));
