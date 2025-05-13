//  A function to add new properties to an existing object

function addNewProperty(existingObj, propName, propVal){
    return existingObj[propName] = propVal;
}

const person = {
    name: 'Echika', 
    age: 34
};
 
console.log(addNewProperty(person, 'Hobby', 'Reading'));
console.log(person)