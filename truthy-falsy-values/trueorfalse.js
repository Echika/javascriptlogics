const valueType = document.querySelector("#valueType");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function validateValue(value) {
  if (value === 'undefined') value = undefined;
  if(value === 'null') value = null;
  if(value === 'false') value = false;
  if(value === '0') value = 0;
  if(!value) {
    return 'Falsy'
  }
  return 'Truthy'
}

button.addEventListener("click", () => {
  let userValue = valueType.value;
  result.textContent = !userValue ? `The ${userValue} is ${validateValue(userValue)}`
  : `The ${userValue} you entered is ${validateValue(userValue)}`
});