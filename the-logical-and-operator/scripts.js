const userAge = document.querySelector("#userAge");
const userHeight = document.querySelector("#userHeight");
const parentPermission = document.querySelector("#parentsPermission");
const eligibility = document.querySelector("#checkForEligibility");
const result = document.querySelector("#result");

eligibility.addEventListener("click", () => {
  if ((userAge.value === "") | (userHeight.value === "")) {
    result.textContent = "Enter a valid age and height";
  } else {
    let age = userAge.value;
    let height = userHeight.value;
    let permission = parentPermission.checked;

    if ((age >= 16 && age <= 65 && height >= 4) || (age >= 12 && permission)) {
      result.textContent = "You are eligible to attend the party";
    } else {
      let reasons = [];
      if (age < 16 && !permission) reasons.push("you are too young too attend the party since you do not have your parent's permission");
      if(age > 65) reasons.push('You are too old to attend this party!');
      if(height < 4) reasons.push('You are not tall enough to attend this party!');
      if(age < 12) reasons.push('You are too young to be in the party');

      result.textContent = `You are not eligible to attend the party because ${reasons}`;
    }
  }
});
