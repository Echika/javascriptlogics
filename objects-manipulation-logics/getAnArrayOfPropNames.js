// A function to get an array of object property names

function getPropNames(obj) {
    if(obj === null || typeof obj !== 'object'){
        throw new Error('property must be a non-null object')
    }
    let result = [];
    for(let key of Object.keys(obj)){
        result.push(key)
    }
    return result;
}

const person = {
    name: 'Abibat',
    age: 4,
    hobby: 'playing'
}

console.log(getPropNames(person))
console.log(person.age)