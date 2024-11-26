const binNumber = document.querySelector("#binNumber");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function changeToBinary(num) {
  if (typeof num !== "number" || num < 0) {
    return "Invalid input. Please enter a non-negative integer";
  }
  if (binNumber.value === "") {
    console.log("Please enter a valid number");
    result.textContent = "Please input a number!";
  }
  return num.toString(2);
}
button.addEventListener("click", () => {
  let userNumber = Number(binNumber.value.trim());
  result.textContent = changeToBinary(userNumber);
  console.log(result);
});
