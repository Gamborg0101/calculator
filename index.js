const firstNumberColumn = document.querySelector(".first-number-column");
const buttons = document.querySelectorAll("button");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.innerHTML);
  });
});

/* 
JEG FUCKING GJORDE DET UDEN AT SLÅ NOGET OP!! GENI!!*/

console.log(buttons);
