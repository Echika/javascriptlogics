// Writing a function that would check if a property exists in an object
function propertyExists(obj, prop){
    return prop in obj ? `${prop.toString().toUpperCase()} actually exists in this object and the value is ${obj[prop]}!`
    : `${prop.toString().toUpperCase()} does not exist in this object!` 
}
const person = {
    name: 'Echika',
    age: 34,
    hobby: 'Reading'
}

console.log(propertyExists(person, 'address'));
console.log(propertyExists(person, 'age'))