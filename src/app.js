function displayWeather(response) {
  let temperature1 = Math.round(response.data.temperature.current);
  let temperatureElement1 = document.querySelector("#temp1");

  let cityElement1 = document.querySelector("#city");

  let skyElement1 = document.querySelector("#sky");

  let dateElement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);

  temperatureElement1.innerHTML = `${temperature1}℃`;
  cityElement1.innerHTML = response.data.city;
  skyElement1.innerHTML = response.data.condition.description;
  dateElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()].toUpperCase();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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
