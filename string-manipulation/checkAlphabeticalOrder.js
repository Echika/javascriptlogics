function checkAlphabeticalOrder(str) {
    return str === str.split('').sort().join('')
}

//testing
console.log(checkAlphabeticalOrder('arrived')) //false
console.log(checkAlphabeticalOrder('abhor')) //true