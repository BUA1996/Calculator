console.log("baron");
//display update
let displayValue = "0";
let num1 = null;
let num2 = null;
let operator = null;

function updateDisplay(){
    const display = document.getElementById("display");
    display.textContent = displayValue;
};

function appendToDisplay(value){
    if (displayValue === "0"){
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
};

function setOperator(selectedOperator){
    if (num1 === null){
        num1 = Number(displayValue);
        operator = selectedOperator;
        displayValue = "0";
    }
};

function calculate(){
    if (num1 !== null && operator !== null && num2 === null){
        num2 = Number(displayValue);
        let result;

        if (operator === '+'){
            //add
            result = num1 + num2;
        } else if (operator === '-'){
            //subtract
            result = num1 - num2;
        } else if (operator === '/'){
            //division
            result = num1 / num2;
        } else if (operator === '*'){
            //miltiply
            result = num1 * num2;
        }

        displayValue = result.toString();
        num1 = result;
        operator = null;
        num2 = null;
        updateDisplay();
    }
};


//clear display
function clearDisplay(){
    displayValue = "0";
    num1 = null;
    num2 = null;
    operator = null;
    updateDisplay();
};