// A function to check the longest word in a sentence.
const longestWord = (str) => {
    if(!str || typeof str !== 'string'){
        return 'Please enter a sentence'
    }
    const splittedWord = str.split(' ')
    let longWord = '';
    for(const strLeng of splittedWord){
        if(strLeng.length > longWord.length){
            longWord = strLeng
        }
    }
    return longWord;
}
//testing

longestWord('long words are easy to discover'); //discover
longestWord('i am glad i met you today') // today