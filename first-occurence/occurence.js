const userInput = document.querySelector("#userInput");
const submitButton = document.querySelector("#submitButton");
const result = document.querySelector("#result");

function getFirstOccurence(str) {
  if (str.length === 0) {
    return "";
  }
  return str[0].toUpperCase();
}

submitButton.addEventListener("click", () => {
  if (userInput.value === "") {
    result.textContent = "Please enter a valid input";
    result.style.color = "red";
  } else {
    let userInputText = userInput.value;
    result.textContent = getFirstOccurence(userInputText);
    result.style.color = "green";
  }
});