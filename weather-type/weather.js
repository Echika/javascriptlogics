const userInput = document.querySelector("#userInput");
const button = document.querySelector("button");
const advice = document.querySelector("#advice");

function capitalizeFirst(character){
    return character.charAt(0).toUpperCase() + character.slice(1)
}

button.addEventListener("click", () => {
  if (userInput.value === "") {
    advice.textContent = "Please enter a valid weather";
    button.disable = true;
  } else {
    let userText = capitalizeFirst(userInput.value);
    button.disable = false
    switch (userText){
      case "Rainy":
       return advice.textContent = "Please ensure you go out with your umbrella today so you do not get drenched in the rain";
      case "Sunny":
        return advice.textContent = "Please remember to wear your hat and make sure your clothings are not to thick to avoid heat";
      case "Winter":
       return advice.textContent = "I love winter a lot";
      default:
        advice.textContent = `Oh its ${userText}, I wish you the very best no matter what weather it is out there`;
        break;
    }
   
  }
});

userInput.addEventListener('input', () => {
  button.disabled = userInput.value.trim() === '';
})


var createCounter = function(n) {
  let count = n;
  return function() {
       return count++;
  };
  return n++;
};
const mints = createCounter(7)
console.log(mints());
console.log(mints())
console.log(mints())