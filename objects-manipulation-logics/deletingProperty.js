// Create a function that will delete a property from an existing object

function deleteObjProp(existingObj, prop){
    return prop in existingObj ? delete existingObj[prop] : 'Cannot be deleted because property does not exist!'
}


const person = {
    name: 'Echika',
    age: 34,
    hobby: 'Reading'
}

const deleted = deleteObjProp(person, 'hobby');
console.log(deleted);