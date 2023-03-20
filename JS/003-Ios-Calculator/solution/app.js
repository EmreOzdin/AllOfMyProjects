//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

//? Selectors
//! We can use getElementsByClassName selector to select multiple html elements. But, if we want to iterate these elements, we can use Array.from() method or spread/rest (...) operator.
// const numberButtons = document.getElementsByClassName("num");
// Array.from(numberButtons).forEach((element) => {
//   console.log(element);
// });
// [...numberButtons].forEach((element) => {
//   console.log(element);
// });

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const acButton = document.querySelector(".ac");
const pmButton = document.querySelector(".pm");
const percentButton = document.querySelector(".percent");
const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

// Operator variables
let previousOperand = "";
let currentOperand = "";
let operation = "";

// After equal or percent buttons are pressed and then new number entered, we should clear the current display. This boolean variable is used to check these buttons are pressed or not
let equalOrPercentBtnPressed = false;

// numbers and decimal buttons event
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumber(number.textContent);
    updateDisplay();
  });
});

// Operator button event
operationButtons.forEach((op) => {
  op.addEventListener("click", () => {
    chooseOperator(op.textContent);
    updateDisplay();
  });
});

//  Equal button event
equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
  equalOrPercentBtnPressed = true;
});

//? All Clear(AC) button event
acButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

//? plus-minus(+-) button event
pmButton.addEventListener("click", () => {
  plusMinus();
  updateDisplay();
});

//? percent (%) button event
percentButton.addEventListener("click", () => {
  percent();
  updateDisplay();
  equalOrPercentBtnPressed = true;
});

//? When number and decimal buttons are clicked, this function appends the number's textContent to the operands
const appendNumber = (num) => {
  //? if our number includes . and user reenters ., it returns
  if (num === "." && currentOperand.includes(".")) return;

  //? if user enters 0 and then reenter 0 , it returns
  if (currentOperand === "0" && num === "0") return;
  if (num == "." && currDisp.innerText.includes("") && currentOperand != '0' && currentOperand != '0.' && currDisp.innerText == 0 ) num = '0.';
  //? if user enters 0  then dont enter 0 and . , it display this entered value.
  if (currentOperand === "0" && num !== "0" && num !== ".") {
    currentOperand = num;
    return;
  }
  //? if user enters more than 10 digit,it returns
  if (currentOperand.length > 10) return;


  //? if equal or percent btn is pressed and then user enter new number, it display just new entered number
  if (equalOrPercentBtnPressed) {
    equalOrPercentBtnPressed = false; //* clear for next usage
    currentOperand = num;
    return;
  }
  //? otherwise,it concatinates all numbers to display them
  currentOperand += num;
};

//? Display the numbers and computation
const updateDisplay = () => {
  //? if computation or number is too long, it trims

  if (currentOperand.toString().length > 12) {
    currentOperand = currentOperand.toString().slice(0, 12);
  }
  currDisp.textContent = currentOperand;

  
  //? if operation button is clicked but current display ends with '.', it should removed
  if (operation != null) {
    if(previousOperand[previousOperand.length-1] == '.') {
      previousOperand = previousOperand.slice(0, -1);
    }

    prevDisp.textContent = `${previousOperand} ${operation}`;
  } else {
    prevDisp.textContent = "";
  }
};
const chooseOperator = (op) => {
  //? if user clicks any operator button without entering any number,it returns
  if (currentOperand === "") return;

  //? if user enter any number then press any operator button, it computes
  if (previousOperand) {
    compute();
  }
  
 
  //? variable swapping
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
};

//? compute the result
const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = "";
  previousOperand = "";
  //? if equal button is clicked, we should reset operation and previousOperand for next usage
};

//? when ac button is clicked, clear all displays
const clear = () => {
  operation = "";
  previousOperand = "";
  currentOperand = "0";
  updateDisplay()
};

//? when pm button is clicked, toggle the polarity of entered value
const plusMinus = () => {
  if (!currentOperand && currentOperand != '0') return;
  currentOperand = currentOperand * -1;
};

//? when % button is clicked
const percent = () => {
  if (!currentOperand) return;
  currentOperand = currentOperand / 100;
};