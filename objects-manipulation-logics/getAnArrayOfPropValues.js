// Create a function that will get an array of all the property values of an object using the Object.values method
// input => object
// output => array of values
function getArrayOfValues(obj) {
    const result = [];
    for(let value of Object.values(obj)){
        result.push(value);
    }
    return result.join('');
}

const person = {
    name: 'Yomade',
    age: 9,
    hobby: 'singing'
}

console.log(getArrayOfValues(person));