const result = document.querySelector("#result");

let first = prompt("Enter a value");
let second = prompt("Enter another value");
let firstDist = first;
let secondDist = second;

let difference = Math.abs(Number(first - second));
result.textContent = `The difference between ${firstDist} and ${secondDist} is ${difference}`;