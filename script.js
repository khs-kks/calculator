const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('p');
const empty_array = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');

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
    if (y === 0) {
        return "lmao";
    }
    return x / y;
}


const operate = function (operator, x, y) {
    x = +x;
    y = +y;
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
    return solution.toString();
}

const evaluateCalculation = function () {
    display.textContent = operate(user_input[1],user_input[0],user_input[2]).slice(0,20);
    if (user_input[3] === "="){
        user_input.splice(0,user_input.length)
    } else {
        let buffer = user_input[3];
        user_input.splice(0,user_input.length)
        user_input.push(+display.textContent);
        user_input.push(buffer);

    }
  
}

// const setDisplayContent = function (text) {
//     if ( text.length > 19 ) {
//         text = text.slice(0 , 20);
//     }
//     display.textContent = text;
// }

let display_content = display.textContent;
let first_number = 0;
let second_number = 0;
let operation = "";
const user_input = [];
let isLastOperator = false;
let wasNumberLast = false;
let isFirstNumber = true;
let isSecondNumber = false;
let first_round = true;

numbers.forEach( (number) => {
    number.addEventListener('click', () => {
        if (isLastOperator) {
            display.textContent = "";
            isLastOperator = false;
        }

        if ( display.textContent.length < 20 ) {
        display.textContent += number.textContent;
        }
    })
})

operators.forEach( (operator) => {
    operator.addEventListener('click', () => {
        isLastOperator = true;
        
        if (display.textContent.length > 0) {
            first_number = +display.textContent;

            user_input.push(first_number);
     
        }
        user_input.push(operator.textContent);
        console.log(user_input)

  
        if (user_input.length > 3) {
            evaluateCalculation();
        }
        
    })
})

empty_array.addEventListener('click', () => {
    display.textContent = "";
    user_input.splice(0,user_input.length)
})

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
})

decimal.addEventListener('click', () => {
    if (!display.textContent.includes('.') && display.textContent.length < 19) {
        display.textContent += '.';        
    }
})


