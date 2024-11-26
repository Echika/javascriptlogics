const userInput = document.querySelector('#userInput');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function validEmail(email) {
    if(email.includes('@') && email.includes('.')){
        return 'Thanks for entering a valid email';
    } else {
        return "You've not entered a valid email address"
    }
}

button.addEventListener('click', () => {
    if(userInput.value === '') {
        result.textContent = 'Please enter an email address';
        result.style.color = 'red'
    } else {
        const userText = userInput.value;
        result.textContent = validEmail(userText);
        result.style.color = 'green'
    }
})

userInput.addEventListener('focus', () => {
    userInput.value = '';
    result.textContent = ''
})