const palindrome = document.querySelector('#palindrome');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function palindromeChecker(str) {
    const reversed = str.split('').reverse().join('');
    if(str === reversed){
        return " a palindrome";
    } else {
        return " not a palindrome"
    }
}

button.addEventListener('click', () => {
    if(palindrome.value === "") {
        result.textContent = 'Enter a word for check!';
        result.style.color = 'red';
    } else {
        let userPalindromeText = palindrome.value;
        result.textContent = `${userPalindromeText} is ${palindromeChecker(userPalindromeText)}`
        result.style.color = ''
    }
})

palindrome.addEventListener('focus', () => {
    palindrome.value = '';
    result.textContent = ''
})