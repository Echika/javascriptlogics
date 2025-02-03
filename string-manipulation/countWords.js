//Let's create a function to count how many words are in a sentence
const countWords = (str) => {
  if (!str || typeof str !== "string") {
    return "Please enter a string";
  }
  return str.split(" ").length;
};

countWords("please lets cooperate"); // 3
countWords(['i love this']) // Please enter a string