// A function to check if two objects are the same
function compare(obj1, obj2, objName){
    (obj1[objName] === obj2[objName]) ? true : false
}

const object1 = {
    name: 'goat',
    color: 'black'
}

const object2 = {
    name: 'dog',
    color: 'brown'
}

console.log(obj1, obj2, 'name')