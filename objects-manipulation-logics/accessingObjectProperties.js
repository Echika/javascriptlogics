//Create a function to access the properties of an object

function getProperty(obj, prop){
    return prop in obj ? obj[prop] : 'Property not found'
}

const person = {
    name: 'Echika', 
    age: 34
};

console.log(getProperty(person, 'name'));