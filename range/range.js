const result = document.querySelector("#result");
let userInput = document.querySelector("#userInput");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  if (userInput.value === "") {
    result.textContent = "Please input a number";
  } else {
    try {
      let guess = userInput.value;
      if(guess > 10){
        throw new Error('This number has exceeded the range')
    }
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    const guessMessage = {
      tooBig: `Number ${guess} you entered is too big, try again`,
      tooSmall: `Number ${guess} you entered is too small, try again`,
      right: "You guessed right, Congratulations",
    };
    if (guess > randomNumber) {
      result.textContent = guessMessage.tooBig;
    } else if (guess < randomNumber) {
      result.textContent = guessMessage.tooSmall;
    } else {
      result.textContent = guessMessage.right;
    }
    console.log(randomNumber);
  } catch(error){
    result.textContent = error.message;
  }
}
});

userInput.addEventListener("focus", () => {
  result.textContent = "";
  userInput.value = "";
});
