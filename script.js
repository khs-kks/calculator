const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('p');
const empty_array = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const decimal = document.querySelector('.decimal');
const windowche = document.querySelector('html');
const equal_sign = document.querySelector('.equal');

const key_numbers = "1234567890.";
const key_operators = "-+*/";
const user_input = [];

let first_number = 0;
let isLastOperator = false;
let isLastNumber = false;

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
    display.textContent = operate(user_input[1],user_input[0],user_input[2]).slice(0,17);
    if (user_input[3] === "="){
        user_input.splice(0,user_input.length)
    } else {
        let buffer = user_input[3];
        user_input.splice(0,user_input.length)
        user_input.push(+display.textContent);
        user_input.push(buffer);

    }
  
}

const populateDisplay = function(value) {
    if (isLastOperator) {
        display.textContent = "";
        isLastOperator = false;
    }

    isLastNumber = true;

    if ( display.textContent.length < 17 ) {
    display.textContent += value;
    }
}

const enterOperator = function(value) {
    if (isLastNumber) {
        isLastOperator = true;
        isLastNumber = false;
            
        if (display.textContent.length > 0) {
            first_number = +display.textContent;

            user_input.push(first_number);
    
        }
        
        user_input.push(value);
        console.log(user_input)


        if (user_input.length > 3) {
            evaluateCalculation();
        }
    }
}

numbers.forEach( (number) => {
    number.addEventListener('click', () => {
        populateDisplay(number.textContent)
    })
})

operators.forEach( (operator) => {
    operator.addEventListener('click', () => {
        enterOperator(operator.textContent);
    })
})

equal_sign.addEventListener('click', () => {
    if (user_input.length === 2) {
        enterOperator(equal_sign.textContent);
    }
})

empty_array.addEventListener('click', () => {
    display.textContent = "";
    user_input.splice(0,user_input.length)
    isLastNumber = false;
    isLastOperator = false;
})

backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
})

decimal.addEventListener('click', () => {
    if (!display.textContent.includes('.') && display.textContent.length < 16) {
        display.textContent += '.';        
    }
})


windowche.addEventListener('keydown', (event) => {
    if (key_numbers.includes(event.key)) {
        populateDisplay(event.key);
    } else if (key_operators.includes(event.key)) {
        enterOperator(event.key)
    } else if (event.key === "Backspace") {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    } else if (event.key === "Enter" ) {
        if (user_input.length === 2) {
            enterOperator("=");
        }
    }
})


