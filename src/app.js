function searchForm(event) {
  event.preventDefault();
  let userInput = document.querySelector("#search-input");
  let userCity = document.querySelector("#city");
  userCity.innerHTML = userInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchForm);
