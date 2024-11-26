const perfectSquare = document.querySelector('#perfectSquare');
const button = document.querySelector('button');
const result = document.querySelector('#result')

function checkPerfectSquare(num) {
    const isIt = Math.sqrt(num).toString();
   return isIt.includes('.') ? ' not a perfect square' : ' a pefect square';
}

button.addEventListener('click', () => {
    const userNumber = perfectSquare.value;
    result.textContent = `${userNumber} is ${checkPerfectSquare(userNumber)}`
})

perfectSquare.addEventListener('focus', () => {
    perfectSquare.value = '';
    result.textContent = '';
})