// A function to iterate over object properties using the for...in loop
// looping is an array method
// so when you're told to use the for...in loop method
// just know you need to declare an array variable to take in the results
// for...in loop usually returns an array

function iterateProperties(obj){
    if(obj === null || typeof obj !== 'object'){
        throw new Error('Property must be a non-null object')
    }
    let result = [];
    for(let key in obj){
        result.push(`${key}: ${obj[key]}`)
    }
    return result.join(', ')
}
const person = {
    name: 'Echika',
    age: 34,
    address: '7, Ekoro Road, Meiran, Lagos, Nigeria'
}

console.log(iterateProperties(person));