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

function displayForecast1() {
  let days1 = ["WEDNESDAY", "THURSDAY", "FRIDAY"];
  let forecast1Html = "";

  days1.forEach(function (day1) {
    forecast1Html += `
      <div class="day2">
        <p>
          <span class="other-days">${day1}</span> <br />
          <span class="other-temps">21℃</span> <br />
          <span class="other-sky">RAINY</span>
        </p>
        <p class="other-clouds">
          <dotlottie-player
            src="https://lottie.host/fc8217ca-053f-4e30-a809-317956f5ce16/oqIseAM08c.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </p>
      </div>          
  `;
  });

  let forecast1Element = document.querySelector("#forecast1");
  forecast1Element.innerHTML = forecast1Html;
}

function displayForecast2() {
  let days2 = ["SATURDAY", "SUNDAY", "MONDAY"];
  let forecast2Html = "";

  days2.forEach(function (day2) {
    forecast2Html += `
      <div class="day2">
        <p>
          <span class="other-days">${day2}</span> <br />
          <span class="other-temps">21℃</span> <br />
          <span class="other-sky">RAINY</span>
        </p>
        <p class="other-clouds">
          <dotlottie-player
            src="https://lottie.host/fc8217ca-053f-4e30-a809-317956f5ce16/oqIseAM08c.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </p>
      </div>          
  `;
  });

  let forecast2Element = document.querySelector("#forecast2");
  forecast2Element.innerHTML = forecast2Html;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);

searchCity("Lagos");
displayForecast1();
displayForecast2();
