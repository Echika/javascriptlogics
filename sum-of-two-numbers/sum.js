let result = document.querySelector("#result");
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button = document.querySelector('button');


function addTwoNumbers(num1, num2) {
   return num1 + num2;
}

button.addEventListener('click', () => {
  let first = Number(input1.value);
  let second = Number(input2.value);
  let sum = addTwoNumbers(first, second);
  result.textContent = `${first} + ${second} = ${sum}`;
})