console.log("baron");

let num1 = 0;
let num2 = 0;
let operator = "";
function calculator(num1, operator, num2){
    if (operator === '+'){
        //add
        function add(num1, num2){
        const sum = num1 + num2;
        return sum;
        };
        return add(num1, num2);
        //console.log(add(3,7));
    } else if (operator === '-'){
        //subtract
        function subtract(num1, num2){
        const difference = num1 - num2;
        return difference;
        };
        return subtract(num1, num2);
        //console.log(subtract(10, 3));
    } else if (operator === '/'){
        //division
        function division(num1, num2){
        const divide = num1 / num2;
        return divide;
        };
        return division(num1, num2);
        //console.log(division(10, 5));
    } else if (operator === '*'){
        //miltiply
        function multiply(num1, num2){
        const mul = num1 * num2;
        return mul;
        };
        return multiply(num1, num2);
        //console.log(multiply(2,2));
    };
};
//result 
console.log(calculator(2.5,'/', 1.5));