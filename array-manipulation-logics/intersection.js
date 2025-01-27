//Find the intersection of an array

function intersection(arr1, arr2){
    return arr1.filter(elem => arr2.includes(elem))
}

//testing
const echik = ['a', 'b', 'r', 'd', 'e', 'f', 'v'];
const compa = ['k', 'v', 't', 'm', 'e'];
console.log(intersection(echik, compa))