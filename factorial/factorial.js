const factorial = document.querySelector('#factorial');
const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    let userFactorial = factorial.value;
    let sum = 1;
    for(let i = 1; i <= userFactorial; i++) {
        sum *= i;
    }
    result.textContent = sum;
})