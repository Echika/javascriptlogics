const userStory = document.querySelector("#userStory");
const button = document.querySelector("button");
const result = document.querySelector("#result");
const searchWord = document.querySelector("#searchWord");
const searchButton = document.querySelector("#searchButton");
const numberOfOccurences = document.querySelector("#numberOfOccurences");

const countWordOccurence = (str, word) => {
  let count = 0;
  str = str.split(' ');
  for (let occur of str) {
    if (occur.toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  return count;
};

button.addEventListener("click", () => {
  if (userStory.value == "") {
    result.textContent = "Please your story box is empty";
    console.log("goal");
  } else {
    let story = userStory.value;
    result.textContent = story;
  }
});

searchButton.addEventListener("click", () => {
  if (userStory.value !== "") {
    let searchValue = searchWord.value;
    if (searchValue == "") {
      numberOfOccurences.textContent = "Please enter a word you want to search";
    } else {
      numberOfOccurences.textContent = `${countWordOccurence(
        userStory.value,
        searchValue
      )}`;
    }
  }
});

