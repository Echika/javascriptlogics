const perfectSquare = document.querySelector('#perfectSquare');
const button = document.querySelector('button');
const result = document.querySelector('#result')

function checkPerfectSquare(num) {
    const isIt = Math.sqrt(num).toString();
   return isIt.includes('.') ? ' not a perfect square' : ' a pefect square';
}

button.addEventListener('click', () => {
    const userNumber = perfectSquare.value;
    result.textContent = `${userNumber} is ${checkPerfectSquare(userNumber)}`
})

perfectSquare.addEventListener('focus', () => {
    perfectSquare.value = '';
    result.textContent = '';
})





// Write a function to add a property to an object
function addNewPropToObject (obj, prop, value) {
  return obj[prop] = value
}

const echika = {
    name: 'Echika Raphael'
}

addNewPropToObject(echika, 'age', 33);
console.log(echika); // the age prop with the value 33 has been added to the echika object