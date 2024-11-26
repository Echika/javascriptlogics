const squareSums = document.querySelector("#squareSums");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let squared;
  let userNumbers = squareSums.value;
  const numbers = userNumbers
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));
  let sum = 0;
  for (let oneNumber of numbers) {
    squared = oneNumber ** 2;
    sum += squared;
  }
  result.textContent = sum;
});
