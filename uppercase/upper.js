const userInput = document.querySelector('#userInput');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function uppercase(str) {
    return str.toUpperCase();
}
button.addEventListener('click', () => {
    if(userInput.value === ''){
        result.textContent = ('Please enter a word to capitalize').toUpperCase()
    } else {
        let userInputText = userInput.value;
        result.textContent = uppercase(userInputText)
    }
})

function modifiedObject(obj){
    const modified = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, typeof value === 'string' ? value.toUpperCase(): value]));
    return modified
}
console.log(modifiedObject({name: 'Echika', hobby: 'reading', age: 'thirteen', city: 'Nigeria'}))