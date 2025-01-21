const weatherType = document.querySelector("#weatherType");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  if (weatherType.value === "") {
    result.textContent =
      "Please help us input a weather to help you determine what would be appropriate dressing for you!";
  } else {
    let userWeather = (weatherType.value).toLowerCase();
    if(userWeather === 'sunny' || userWeather === 'cloudy'){
        result.textContent = "Please wear a t-shirt"
    } else if(userWeather === 'rainy' || userWeather === 'snowy'){
        result.textContent = 'Wear a raincoat and warm clothes'
    } else {
        result.textContent = 'Invalid weather'
    }
  }
});
