const userInput = document.querySelector('#userInput');
const button = document.querySelector('#submitButton');
const result = document.querySelector('#result');

function reverseEveryword(str){
    return str.reverse().join('');
}

button.addEventListener('click', () => {
    if(userInput.value === ''){
        result.textContent = 'Please enter a valid input'
    } else {
        let userText = userInput.value;
        result.textContent = reverseEveryword(userText)
    }
})