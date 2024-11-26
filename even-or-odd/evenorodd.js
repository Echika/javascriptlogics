const evenOdd = document.querySelector('#evenOdd');
const button = document.querySelector('button');
const result = document.querySelector('#result')

button.addEventListener('click', () => {
    let userNum = evenOdd.value;
    result.textContent =  userNum % 2 === 0 ? `${userNum} is an even number` : `${userNum} is an odd number`;  
})