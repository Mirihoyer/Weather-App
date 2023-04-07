
//feature1
function formatDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let dates = date.getDate();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${dates} ${hour}:${minute}`;
};

let h4 = document.querySelector("h4");
let currentTime = new Date();
h4.innerHTML = formatDate(currentTime);

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}
function search(city) {
  let apiKey = "e67bb595b38b27e47a8be597add1f415";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function updateCity(event) {
  event.preventDefault();
 let city = document.querySelector(".form-control").value;
  search(city);
  // let inputField = document.querySelector(".form-control");
  //let cityHeading = document.querySelector("#city");
  // cityHeading.innerHTML = inputField.value;
}

function searchLocation(position) {
  let apiKey = "e67bb595b38b27e47a8be597add1f415";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

document.querySelector("#search-form").addEventListener("click", updateCity);



function chanceCelsius(event) {
  event.preventDefault();
  let chanceGrades = document.querySelector("#temperature");
  chanceGrades.innerHTML = "16°C";
  
}

let clickCel = document.querySelector("#celsius");
clickCel.addEventListener("click", chanceCelsius);

function chanceFahr(event) {
  event.preventDefault();
  let chanceGrades = document.querySelector("#temperature");
  chanceGrades.innerHTML = "40°F";
}

let clickFahr = document.querySelector("#fahr");
clickFahr.addEventListener("click", chanceFahr);

let currentLocation = document.querySelector("#location");
currentLocation.addEventListener("click", getCurrentLocation)

search("Paris");