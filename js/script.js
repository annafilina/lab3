//Объявление переменных

//числа
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

//операции
let addition = document.querySelector('.addition');
let subtraction = document.querySelector('.subtraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let equal = document.querySelector('.equal');
let del = document.querySelector('.delete');
let change = document.querySelector('.change');
let clear = document.querySelector('.clear');

//данные
let before = '';
let now = '0';
let operation = '';


//поле ввода
let field = document.querySelector('.field p');




//Слушатели на кнопки

one.addEventListener('click', () => {
    add('1');
})

two.addEventListener('click', () => {
    add('2');
})

three.addEventListener('click', () => {
    add('3');
})

four.addEventListener('click', () => {
    add('4');
})

five.addEventListener('click', () => {
    add('5');
})

six.addEventListener('click', () => {
    add('6');
})

seven.addEventListener('click', () => {
    add('7');
})

eight.addEventListener('click', () => {
    add('8');
})

nine.addEventListener('click', () => {
    add('9');
})

zero.addEventListener('click', () => {
    add('0');
})

addition.addEventListener('click', () => {
    operationFunc('+');
})

subtraction.addEventListener('click', () => {
    operationFunc('-');
})

multiplication.addEventListener('click', () => {
    operationFunc('*');
})

division.addEventListener('click', () => {
    operationFunc('/');
})

del.addEventListener('click', () => {
    if(now.length !== 1){
        now = now.slice(0, -1);
    } else {
        now = '0';
    }
    field.textContent = now;
})

clear.addEventListener('click', () => {
    before = '';
    now = '0';
    operation = '';
    field.textContent = now;
})

change.addEventListener('click', () => {
    now = String(parseFloat(now)*(-1));
    field.textContent = now;
})

equal.addEventListener('click', () => {
    calculation(operation);
})



//функции для калькулятора

function check() {
    if(now === '0') {
        now = '';
    }
}

function add(str){
    check();
    now += str;
    field.textContent = now;
}

function operationFunc(str) {
    if (now === '') {
        return
    }
    if (before !== '') {
        calculation(operation);
    }
    operation = str;
    before = now;
    now = '';
}

function calculation(str) {
    let result;
    let first = parseFloat(before);
    let second = parseFloat(now);
    if (isNaN(first) || isNaN(second)) {
        return
    }
    if(str === '+') {
        result = first + second;
    } else if(str === '-') {
        result = first - second;
    } else if(str === '*') {
        result = first * second;
    } else if(str === '/') {
        result = first / second;
    }
    operation = '';
    before = '';
    now = String(result);
    field.textContent = now;
}
