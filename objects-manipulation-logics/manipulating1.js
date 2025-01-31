// How to check if an object has a property.
//The best and most updated way to check for this is by using the 
// 1. 'Object.hasOwn()' method.
const echikaObj = {
    name: 'Echika',
    surname: 'Raphael',
    age: 33,
    height: '6feets',
    occupation: 'Software Developer',
    hobby: 'brainstorming',
    address: {
        street: 'Ekoro',
        number: 7,
        state: 'Lagos',
        houseColor: 'cement-color'
    },
    status: 'married',
    noOfKids: 3
}
//Syntax => Object.has(objectName, propName)
console.log(Object.hasOwn(echikaObj, 'names')) //false
console.log(Object.hasOwn(echikaObj, 'name'))// true

//2. The 'in' operator
//Syntax => ('prop' in objectName)
console.log('age' in echikaObj) // true