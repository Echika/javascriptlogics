// A function to check if two objects are equal
function areTheyEqual(obj1, obj2) {
  let obj1Key = Object.keys(obj1).sort();
  let obj2Key = Object.keys(obj2).sort();

  // Check if they have same length
  if (obj1Key.length !== obj2Key.length) {
    return "Objects are not the same!";
  }
  // Check if they have same property names
  for (let i = 0; i < obj1Key.length; i++) {
    if (obj1Key[i] !== obj2Key[i]) {
      return "Objects are not the same";
    }
  }
  //Check if they have same values
  for (let key of obj1Key) {
    if (obj1[key] !== obj2[key]) {
      return "Objects are not the same";
    }
  }
  return "Objects are the same";
}

const person1 = {
    name: 'love',
    age: 45,
    height: '5feet'
}
const person2 = {
    name: 'love',
    age: 4,
    height: '5feet'
}

console.log(areTheyEqual(person1, person2))