//How to merge objects
function objMerge(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

//How to create a function that will swap objects
function swap(obj) {
  let swapped = {};
  for (const ob in obj) {
    swapped[obj[ob]] = ob;
  }
  return swapped;
}

// or
function swap2(obj) {
  let swapped = {};
  for (const [key, value] of Object.entries(obj)) {
    swapped[value] = key;
  }
  return swapped;
}

const echikaObj = {
  name: "Echika",
  surname: "Raphael",
  age: 33,
  height: "6feets",
  occupation: "Software Developer",
  hobby: "brainstorming",
  address: {
    street: "Ekoro",
    number: 7,
    state: "Lagos",
    houseColor: "cement-color",
  },
  status: "married",
  noOfKids: 3,
};

const orimsObj = {
  name: "Orimisuwa",
  surname: "Raphael",
  age: 47,
  height: "5ft",
};

console.log(objMerge(echikaObj, orimsObj))
//In the process of merging if it comes across the same property,
//it will override the first object's property