const userInput = document.querySelector("#userInput");
const btn = document.querySelector("#button");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  if (userInput.value === "") {
    result.textContent = "Please enter a valid number";
  } else {
    let answer = userInput.value;
    result.textContent =
      answer % 7 === 0
        ? "The number you entered is divisible by 7"
        : "The number you entered is not divisible by 7";
  }
});

userInput.addEventListener("input", () => {
  if (userInput.value.trim() !== "") {
    btn.style.backgroundColor = "green";
    btn.disable = false;
  } else {
    btn.disable = true;
    btn.style.backgroundColor = "none";
  }
});

userInput.addEventListener("focus", () => {
  userInput.value = "";
  result.textContent = "";
});
