const userInput = document.querySelector('#userInput');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function domainExtract(email) {
    try {
        const extracted = email.split('@')[0];
        return extracted;
    } catch(error){
       console.error('Error extracting domain:', error);
       return 'Invalid email format'
    }
    }


button.addEventListener('click', () => {
    if(userInput.value === ''){
        result.textContent = 'Please enter a valid email address for extraction of domain name!'
    } else {
     const userText = userInput.value
     const validOne = userText.includes('@') && userText.includes('.');
     if(!validOne) {
        result.textContent = 'Its not complete yet, please'
     } else{
     result.textContent = domainExtract(userText)
     }
    }
})

userInput.addEventListener('focus', () => {
    userInput.value = '';
    result.textContent = '';
})