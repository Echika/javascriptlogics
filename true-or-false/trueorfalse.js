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
    result.style.color = "red";
  } else {
    const userText = userInput.value;
    result.textContent = `${userText} ${isItAPerfectSquare(
      userText
    )} giving us a result of ${Math.sqrt(userText).toFixed(2)}`;
    result.style.color = "white";
    result.style.display = "block";
    console.log(result);
  }
});

userInput.addEventListener("focus", () => {
  userInput.value = "";
  result.textContent = "";
  result.style.display = "none";
});
// completing a create counter challenge. has nothing to do with the code above
var createCounter = function (init) {
  let count = init;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = init
      return init;
    },
  };
};

let first = createCounter(6)
console.log(first.decrement());
console.log(first.decrement())
console.log(first.reset());
console.log(first.increment())
console.log(first.increment())
console.log(first.reset())