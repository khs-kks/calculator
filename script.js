let result = 0;

const add = function (x, y) {

    return x + y;
};

const subtract = function (x, y) {

    return x - y;
};

const multiply = function (x, y) {

    return x * y;
}

const divide = function (x, y) {

    return x / y;
}


const operate = function (operator, x, y) {
    let solution = 0;
    switch(operator) {
        case "+":
            solution = add(x, y);
            break;
        case "-":
            solution = subtract(x, y);
            break;
        case "*":
            solution = multiply(x, y);
            break;
        case "/":
            solution = divide(x, y);
            break;
    }
    return solution;
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('p');
// const equal_sign = document.querySelector('.operate');
let display_content = display.textContent;
let first_number = 0;
let second_number = 0;
let operation = "";

numbers.forEach( (number) => {
    number.addEventListener('click', () => {
        display.textContent += number.textContent;

    })
})

operators.forEach( (operator) => {
    operator.addEventListener('click', () => {
        
        switch(operator.textContent) {
            case "+":
                operation = "+";
                display.textContent += operator.textContent;
                break;
            case "-":
                operation = "-";
                display.textContent += operator.textContent;
                break;
            case "*":
                operation = "*";
                display.textContent += operator.textContent;
                break;
            case "/":
                operation = "/";
                display.textContent += operator.textContent;
                break;
            case "=":
                second_number = Number(display.textContent.split(operation)[1]);
                first_number = Number(display.textContent.split(operation)[0]);

                display.textContent = operate(operation, first_number, second_number);
                break;
        }
        
    })
})

// equal_sign.addEventListener('click', () => {

// })
