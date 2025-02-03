//A logic used for counting the amount of consonants in a string.
const countConsonants = (str) => {
    if(!str || typeof str !== 'string'){
        return 0;
    }
    str = str.toLowerCase();
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for(const char of str){
        if(!vowels.includes(char) && char >= 'a' && char <= 'z'){
            count++;
        }
    }
    return count;
}
countConsonants('help me oh God') // 7
countConsonants('iloveyou') // 3