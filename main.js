let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll("button"));

buttons.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (event) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      default:
        if (display.innerText === "0" && event.target.innerText !== ".") {
          display.innerText = event.target.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
    }
  });
});
