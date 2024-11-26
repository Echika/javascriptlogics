const userInput = document.querySelector('#userInput');
const button = document.querySelector('button');
const result = document.querySelector('#result')

function checkStrLength(str) {
    const leng = str.split('').length;
    return leng;
}
button.addEventListener('click', () => {
    if(userInput.value === ''){
        result.textContent = 'Please enter a word!'
    } else {
        let userInputText = userInput.value;
        result.textContent = checkStrLength(userInputText)
    }
})