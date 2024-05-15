function displayWeather(response) {
  let temperature1 = Math.round(response.data.temperature.current);
  let temperatureElement1 = document.querySelector("#temp1");

  let cityElement1 = document.querySelector("#city");

  let skyElement1 = document.querySelector("#sky");

  let dateElement = document.querySelector("#current-date");
  let date = new Date(response.data.time * 1000);

  let cloudElement1 = document.querySelector("#cloud1");

  temperatureElement1.innerHTML = `${temperature1}℃`;
  cityElement1.innerHTML = response.data.city;
  skyElement1.innerHTML = response.data.condition.description;
  dateElement.innerHTML = formatDate(date);
  cloudElement1.innerHTML = `<img src="${response.data.condition.icon_url}" class="cloud1">`;

  getForecast1(response.data.city);
  getForecast2(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  return days[date.getDay()];
}

function getForecast1(city) {
  let apiKey = "08452154bta00ao7c030df2ccc330f5e";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast1);
}

function displayForecast1(response) {
  let forecast1Html = "";

  response.data.daily.forEach(function (days1, index) {
    if (index > 0 && index < 4) {
      forecast1Html += `
      <div class="day2">
        <p>
          <span class="other-days">${formatDay(days1.time)}</span> <br />
          <span class="other-temps">${Math.round(
            days1.temperature.day
          )}℃</span> <br />
        </p>
        <p class="other-clouds">
          <img src="${days1.condition.icon_url}" class="other-clouds" />
        </p>
      </div>          
  `;
    }
  });

  let forecast1Element = document.querySelector("#forecast1");
  forecast1Element.innerHTML = forecast1Html;
}

function getForecast2(city) {
  let apiKey = "08452154bta00ao7c030df2ccc330f5e";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast2);
}

function displayForecast2(response) {
  let forecast2Html = "";

  response.data.daily.forEach(function (days2, index) {
    if (index > 3 && index < 7) {
      forecast2Html += `
      <div class="day2">
        <p>
          <span class="other-days">${formatDay(days2.time)}</span> <br />
          <span class="other-temps">${Math.round(
            days2.temperature.day
          )}℃</span> <br />
        </p>
        <p class="other-clouds">
        <img src="${days2.condition.icon_url}" class="other-clouds"/>
        </p>
      </div>          
  `;
    }
  });

  let forecast2Element = document.querySelector("#forecast2");
  forecast2Element.innerHTML = forecast2Html;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);

searchCity("Lagos");
