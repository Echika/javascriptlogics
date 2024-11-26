const mainWord = document.querySelector("#mainWord");
const removeThis = document.querySelector("#removeThis");
const replaceWithThis = document.querySelector("#replaceWithThis");
const button = document.querySelector("button");
const result = document.querySelector("#result");

function replace(str, remove, addThis) {
  return str.split(remove).join(addThis);
}

button.addEventListener("click", () => {
  if (
    mainWord.value === "" ||
    removeThis.value === "" ||
    replaceWithThis.value === ""
  ) {
    result.textContent = "Please fill all input fields ";
    result.style.color = 'red';
  } else {
    let main = mainWord.value;
    let remove = removeThis.value;
    let replacement = replaceWithThis.value;
    result.textContent = `${main} has removed ${remove} and replaced it with ${replacement} to give us ${replace(
      main,
      remove,
      replacement
    )}`;
    result.style.color = 'green'
  }
});

mainWord.addEventListener('focus', () => {
    mainWord.value = '';
    result.textContent = '';
})
removeThis.addEventListener('focus', () => {
    removeThis.value = '';
})
replaceWithThis.addEventListener('focus', () => {
    replaceWithThis.value = '';
})