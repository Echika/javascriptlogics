const conversion = document.querySelector("#conversion");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let convertToFahrenheit = conversion.value;
  let fahrenheit = 1.8 * convertToFahrenheit + 32;
  result.textContent = fahrenheit;
});
