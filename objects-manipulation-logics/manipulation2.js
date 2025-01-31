//How to create a function that will swap objects
function swap(obj){
    let swapped = {};
    for(const ob in obj){
        swapped[obj[ob]] = ob;
    }
    return swapped
}

// or
function swap2(obj){
    let swapped = {}
    for(const [key, value] of Object.entries(obj)){
        swapped[value] = key
    }
    return swapped;
}

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
console.log(swap(echikaObj));
console.log(swap2(echikaObj));