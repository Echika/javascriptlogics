const userText = document.querySelector("#userText");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function checkSpecialCharacter(str) {
  const special = [
    ".",
    "?",
    "``",
    "&",
    "()",
    "-",
    "_",
    "*",
    "^",
    "%",
    "#",
    "@",
    "!",
    "$",
    "[",
    "]",
    "{",
    "}",
    ",",
    "'",
    "\"",
  ];

 return special.some(char => str.includes(char))
}
button.addEventListener("click", () => {
  if (userText.value === "") {
    result.textContent = "Please enter a word for check!";
    result.style.color = 'red';
  } else {
    let userInputText = userText.value;
    result.textContent = checkSpecialCharacter(userInputText) ? 'It contains it' : 'It does not contain it'
    result.style.color = 'black'
    console.log(result);
  }
});

userText.addEventListener('focus', () => {
  userText.value = '';
  result.textContent = '';
})
