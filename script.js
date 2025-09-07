let string = "";
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      string = string.replace(/×/, "*").replace(/÷/, "/").replace(/−/, "-");

      try {
        string = eval(string).toString(); 
      } catch {
        string = "";
      }
      display.value = string;

    } else if (value === "AC") {
      string = ""; // reset
      display.value = "0";

    } else if(value === "%"){
        string += "%"
        display.value = string;
    } else if (value === "⮐") {
      string = string.slice(0, -1); 
      display.value = string || "0";

    } else {
      string += value; // add input
      display.value = string;
    }
  });
});
