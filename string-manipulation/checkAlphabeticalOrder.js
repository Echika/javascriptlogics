function checkAlphabeticalOrder(str) {
    return str === str.split('').sort().join('')
}

//testing
console.log(checkAlphabeticalOrder('arrived'))
console.log(checkAlphabeticalOrder('abhor'))