let operand1 = "",
  operand2 = "",
  operator = "",
  result = "",
  tempContent = "",
  flag = true;

for (var i = 0; i < document.querySelectorAll(".cell").length; i++) {
  document.querySelectorAll(".cell")[i].addEventListener("click", doSomething);
}

function doSomething() {
  tempContent = this.textContent; /*grabbing the button pressed*/
  if (this.classList.value.includes("operand") && flag) {
    operand1 = operand1 + tempContent; /*forming first number*/
    document.querySelector(".row0").textContent = operand1;
  } else if (
    this.classList.value.includes("operator") /*grabbing the operator*/ &&
    tempContent !== "=" &&
    tempContent !== "+/-"
  ) {
    operator = tempContent;
    flag = false;
    document.querySelector(".row0").textContent = operator;
  } else if (this.classList.value.includes("operand") && !flag) {
    /*grabbing the second number*/
    operand2 += tempContent;
    document.querySelector(".row0").textContent = operand2;
  }
  if (tempContent === "+/-") {
    if (flag) {
      operand1 = parseInt(operand1) * -1;
      document.querySelector(
        ".row0"
      ).textContent = operand1; /*making operand1 and operand2 negative on need */
    } else {
      operand2 = parseInt(operand2) * -1;
      document.querySelector(".row0").textContent = operand2;
    }
  }
  if (tempContent === "=") {
    if (operator === "+") {
      result = parseFloat(operand1) + parseFloat(operand2); /*performing operation*/
    } else if (operator === "-") {
      result = operand1 - operand2;
    } else if (operator === "/") {
      result = operand1 / operand2;
    } else if (operator === "*") {
      result = operand1 * operand2;
    } else if (operator === "%") {
      result = operand1 % operand2;
    }
    document.querySelector(".row0").textContent = result;
  }

  if (tempContent === "AC") {
    operator = operand1 = operand2 = result = tempContent = "";
    flag = true;
    document.querySelector(".row0").textContent = "0";
  }
}
