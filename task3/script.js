let screen = document.getElementById('screen');
let temp = '';  
let current_operator = null;
let last_Operator = null;

function screen_empty() {
    temp = '';
    current_operator = null;
   last_Operator = null;
    screen.innerText = '0';
}

function del() {
    temp = temp.slice(0, -1);
    screen.innerText = temp || '0';
}

function nbr(number) {
    temp += number;
    screen.innerText = temp;
}

function Operator(operator) {
    if (temp === '' &&last_Operator === null) return;
    if (last_Operator === null) {
       last_Operator = parseFloat(temp);
    } else if (current_operator) {
       last_Operator = calcul(last_Operator, parseFloat(temp), current_operator);
        screen.innerText =last_Operator;
    }
    current_operator = operator;
    temp = '';
}

function results() {
    if (current_operator === null || temp === '') return;
    screen.innerText = calcul(last_Operator, parseFloat(temp), current_operator);
    temp = '';
    current_operator = null;
   last_Operator = null;
}

function calcul(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
document.querySelectorAll('.insert').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.insert').forEach(btn => btn.classList.remove('change'));
        this.classList.add('change');
    }); });