const numbers = document.querySelector('#numbers');
const button = document.querySelector('button');
const result = document.querySelector('#result');

function calculateAverage (arr) {
   if(arr.length === 0) return 0;
   const sum = arr.reduce((acc, val) => acc + val, 0);
   return sum/arr.length;
}
button.addEventListener('click', () => {
   let stringed = numbers.value;
   let stringedArray = stringed.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
   const average = calculateAverage(stringedArray)
   result.textContent = average
})
