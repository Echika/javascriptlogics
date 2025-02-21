//A logic used for counting the amount of consonants in a string.
const countConsonants = (str) => {
    if(!str || typeof str !== 'string'){
        return 0;
    }
    str = str.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(const char of str){
        if(!vowels.includes(char)){
            count++;
        }
    }
    return count;
}

//Alternatively using the regular expression which makes the whole job a breeze
const regCountConsonants = (str) => {
    return str.match(/[^aeiou]/gi).length
}

console.log(regCountConsonants('help me oh God')) // 10
console.log(regCountConsonants('thisChildrenWANTDeytalktoomuchfordream'))
console.log(countConsonants('iloveyou')) // 3