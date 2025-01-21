const userAge = document.querySelector("#userAge");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function discountEligibility(age) {
  if (age >= 13 && age <= 18) {
    return "You are eligible for a student discount. Ticket price: $12";
  } else if (age >= 65) {
    return "You are eligible for a senior citizen discount. Ticket price: $10";
  } else {
    return "You are not eligible for a discount. Ticket price: $15";
  }
}

button.addEventListener("click", () => {
  if (userAge.value === "") {
    result.textContent = "Please input your age";
  } else {
    let ageInput = userAge.value;
    result.textContent = `${discountEligibility(ageInput)}`
  }
});
