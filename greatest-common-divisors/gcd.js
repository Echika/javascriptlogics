let first = document.querySelector("#first");
let second = document.querySelector("#second");
let button = document.querySelector("button");
let result = document.querySelector("#result");

function gcd(userFirst, userSecond) {
  let xArray = [];
  let yArray = [];

  for (let i = 1; i <= userFirst; i++) {
    if (userFirst % i === 0) {
      xArray.push(i);
    }
  }

  for (let i = 1; i <= userSecond; i++) {
    if (userSecond % i === 0) {
      yArray.push(i);
    }
  }

  const commonFactors = xArray.filter((value) => yArray.includes(value));
  const largestNumber = Math.max(...commonFactors);
  return largestNumber;
}

button.addEventListener("click", () => {
    
    if (first.value === "" || second.value === "") {
        result.textContent = "Please enter a number";
    } else {
      const userFirst = Number(first.value);
      const userSecond = Number(second.value);
    if (userFirst <= 0 || userSecond <= 0) {
      result.textContent = "Please enter a more positive number";
      result.style.color = "red";
    } else {
      result.textContent = `The greatest common divisor between ${userFirst} and ${userSecond} is ${gcd(
        userFirst,
        userSecond
      )}`
      result.style.color = 'black';
    }
  }
});
