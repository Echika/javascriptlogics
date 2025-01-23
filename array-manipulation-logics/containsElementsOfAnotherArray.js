// A logic to check if an array contains every elements of another array
function containsEveryElement(arr1, arr2){
    return arr2.every(elem => arr1.includes(elem));
}

const echika = ['a', 'b', 'c', 'd',  'a', 'g', 'd', 'e', 'f'];
const copier = ['a', 'd', 'g', 'f'];

console.log(containsEveryElement(echika, copier)) // true
console.log(containsEveryElement(copier, echika)) // false