//A function to count special characters in a string
function countSpecialCharacter(str) {
    const alphabetsAndNumber = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let count = 0;
    for(let char of str){
        if(!alphabetsAndNumber.includes(char)){
            count++;
        }
    }
    return count;
}

//testing 
console.log(countSpecialCharacter('&ef)*')) // 3