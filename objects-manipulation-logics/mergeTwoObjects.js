// A function to merge two objects to become one
function mergeObjects(obj1, obj2){
    if(typeof obj1 !== 'object' && typeof obj2 !== 'object'){
        throw new Error('inputs must be objects')
    }
    const merged = Object.assign(obj1, obj2)
    return merged;
}
const person1 = {
    name: 'Alpha',
    age: 45
};
const person2 = {
    hobby: 'skiing',
    address: '7, Ekoro road'
}
console.log(mergeObjects(person1, person2))