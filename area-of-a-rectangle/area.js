const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
let result = document.querySelector('#result');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    result.textContent = `${first} x ${second} = ${first*second}`;
})