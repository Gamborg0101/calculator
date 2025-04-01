const firstNumberColumn = document.querySelector(".first-number-column");
const buttons = document.querySelectorAll("button");
const screenLocation = document.querySelector(".calc-screen");

let screenNumbers = document.createElement("p");
screenNumbers.classList.add("screen-number");
screenNumbers.innerText = "";
screenLocation.appendChild(screenNumbers);

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.innerText);
    screenNumbers.innerText += element.innerText;

    console.log(screenNumbers.innerText);
    /*Dette kan jeg smide ind i min funktion, 
    men hvad så når jeg bruger +?
    screenNumbers.innerText = "" - men dette
    fjerner vel også værdien fra funktionen? 

    Jeg skal vel forsøge at gemme det i en variabel, men det kan jeg vil ikke,
    når det er screenNumbers.innerText der skal ændres?
    Og hvordan ændre jeg min variabel, når jeg klikker på "+"?
    Måske skal jeg gemme screenNumbers.innerText i en variabel, og 
    gøre det en del af et dobbelt if loop? 
    Så if(value1 == "number")
    if(value2 == "number")
        sum(); 
    else(
    innerText = ""; 
    )
    

    Vent... Vil det være bedre at bruge event.target.value? 
    så - screenNUmbers.innerText += event.target.value;


    
    
    */

    if (element.innerText == "+") {
      //sum function - but what about inputs?
      sum();
    }
  });
});

const sum = (a, b) => {
  return a + b;
};

/* 
JEG FUCKING GJORDE DET UDEN AT SLÅ NOGET OP!! GENI!!*/
