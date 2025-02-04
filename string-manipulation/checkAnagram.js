//A function to check if a string is an anagram
//An anagram is word or phrase made by transposing the letters of another word or phrase.

const checkAnagram = (str1, str2) => {
    const firstString = str1.replace(/\s/g, '').toLowerCase();
    const secondString = str2.replace(/\s/g, '').toLowerCase();

    if(firstString.length !== secondString.length){
        return 'It is not an anagram'
    }

    const charCount1 = {};
    const charCount2 = {};

    for(let char of firstString){
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for(let char of secondString){
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    for(let char in charCount1){
        if(charCount1[char] !== charCount2[char]){
            return 'It is not an anagram'
        }
    }

    return 'It is an anagram'
}