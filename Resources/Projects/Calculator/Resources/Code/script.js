// calculator script

// variables
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';

// screen output 
const screenOutput = document.getElementById('screen');

// functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;       
}

function divide(a, b) {
    return b !== 0 ? a / b : 'cannot divide by zero';       
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}



// event listeners

// number selector
const numbers = document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            num1 = num1 * 10 + parseInt(button.textContent);
            screenOutput.textContent = num1;
        } else {
            num2 = num2 * 10 + parseInt(button.textContent);
            screenOutput.textContent = num2;
        }
    });
});

// operator selector
const operators = document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        screenOutput.textContent = operator;
    });
});

// clear
const clear = document.getElementById('clear').addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    result = 0;
    operator = '';
    screenOutput.textContent = 0;
});

// equal
const equal = document.getElementById('equal').addEventListener('click', () => {
    if (operator !== '') {
    result = operate(num1, num2, operator);
    screenOutput.textContent = result;
    num1 = result;
    num2 = 0;
    operator = '';
    } else {
        screenOutput.textContent = 'no output';
    }
});

// percentage
const percentage = document.getElementById('percentage').addEventListener('click', () => {
    if (operator === '') {
        num1 = num1 / 100;
        screenOutput.textContent = num1;
    } else {
        num2 = num2 / 100;
        screenOutput.textContent = num2;
    }
});

