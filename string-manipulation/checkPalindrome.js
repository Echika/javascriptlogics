// A Palindrome checker function. 
// A Palindrome is a word or sentence that reads the same backward or forward.
// Let's create one

const palindromeChecker = (str) => {
    const reversed = str.split('').join('').reverse();
    return str === reversed ? 'A palindrome' : 'Not a palindrome';
}

palindromeChecker('madam');
palindromeChecker('i love you')