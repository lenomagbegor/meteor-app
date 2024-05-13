function displayWeather(response) {
  let temperature1 = Math.round(response.data.temperature.current);
  let temperatureElement1 = document.querySelector("#temp1");
  temperatureElement1.innerHTML = `${temperature1}℃`;

  let userCity = document.querySelector("#city");
  userCity.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "08452154bta00ao7c030df2ccc330f5e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function searchForm(event) {
  event.preventDefault();
  let userInput = document.querySelector("#search-input");

  searchCity(userInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);

searchCity("Lagos");
