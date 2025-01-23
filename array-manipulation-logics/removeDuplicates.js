//How to remove duplicates from an array.
//This logic will introduce us to using sets in JavaScript
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

const echika = ['a', 'b', 'c', 'd',  'a', 'g', 'd', 'e', 'f'];
console.log(removeDuplicates(echika))// ['a', 'b', 'c', 'd', 'g', 'e', 'f']