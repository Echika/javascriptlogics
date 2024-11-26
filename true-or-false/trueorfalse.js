const userInput = document.querySelector("#userInput");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function isItAPerfectSquare(number) {
  const sqroot = Math.sqrt(number).toString();
  return sqroot.includes(".")
    ? " is not a perfect square"
    : "is a perfect square";
}

button.addEventListener("click", () => {
  if (userInput.value === "") {
    result.textContent = "Please enter a number";
    result.style.color = 'red'
  } else {
    const userText = userInput.value;
    result.textContent = `${userText} ${isItAPerfectSquare(userText)} giving us a result of ${Math.sqrt(userText).toFixed(2)}`;
    result.style.color = 'white';
    result.style.display = 'block'
    console.log(result);
  }
});

userInput.addEventListener('focus', () => {
    userInput.value = '';
    result.textContent = '';
    result.style.display = 'none'
})