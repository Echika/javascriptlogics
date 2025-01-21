const userInput = document.querySelector('#userInput');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function isItAnArray(value){
    return Array.isArray(value)
}

button.addEventListener('click', () => {
    if(userInput.value === '') result.textContent = 'Please enter a valid input'
    let userValue = userInput.value;
    result.textContent = userValue.startsWith('[') && userValue.endsWith(']') ? 'It is an array' : 'It is not an array'
        
    })