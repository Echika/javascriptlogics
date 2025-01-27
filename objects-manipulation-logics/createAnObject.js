//Create an object in JavaScript

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

console.log(`the color of Echika's house is ${echikaObj.address.houseColor}`);
console.log(`Echika is ${echikaObj.status}`) //Echika is married


// 2 Constructor function 
function Person(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height,
    this.greetingFromMe = function() {
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old and I am ${this.height} tall, you'd be glad to meet me`)
    }
}

const echi = new Person('Echika', 33, '5fts');
console.log(echi.greetingFromMe())//Hello my name is Echika, I am 33 years old and I am 5fts tall, you'd be glad to meet me


// How to access an object's property
// Method 1
// we do this by using the dot-notation 
console.log(echikaObj.occupation) // Software Developer
// or Method 2
console.log(echikaObj['occupation']) // Software Developer

//How to add or assign a new property. alway make use of equal to(=)
echikaObj['complexion'] = 'fair'
//or 
echikaObj.complexion = 'fair'

//How to delete a property from an object
delete echikaObj['complexion'] //true
//or
delete echikaObj.complexion //true
