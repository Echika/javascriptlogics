const userInput = document.querySelector("#userInput");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function extract(str, start = 0, length = 3) {
  const xtract = str.substring(start, start + length);
  return xtract.toUpperCase();
}

button.addEventListener("click", () => {
  if (userInput.value === "") {
    result.textContent = "Please enter a word you would like to extract";
  } else {
    let userInputText = userInput.value;
    result.textContent = extract(userInputText);
  }
});

userInput.addEventListener("focus", () => {
  userInput.value = "";
  result.textContent = "";
});
