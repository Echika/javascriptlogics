const button = document.querySelector("#check");
const userInput = document.querySelector("#userInput");
const result = document.querySelector("#result");

function specificWord(str, word){
  const lowerStr = str.toLowerCase();
  const lowerWord = word.toLowerCase();
  return lowerStr.includes(lowerWord) ? true : false;
}

