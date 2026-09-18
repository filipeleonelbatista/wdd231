const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector(".weather figcaption");
const forecastDiv = document.querySelector("#forecast");

const API_KEY = "d40768be36c593637851f511986fdb72";
const lat = -29.94;
const lon = -51.02;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

function displayCurrent(data) {
  currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDesc.textContent = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", data.weather[0].description);
  caption.textContent = data.weather[0].description;
}

function displayForecast(data) {
  const daily = data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 3);
  daily.forEach((item) => {
    const p = document.createElement("p");
    const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
      weekday: "short",
    });
    p.textContent = `${date}: ${Math.round(item.main.temp)}°C`;
    forecastDiv.appendChild(p);
  });
}

async function apiFetch() {
  try {
    const res1 = await fetch(currentUrl);
    if (res1.ok) {
      const data = await res1.json();
      console.log(data);
      displayCurrent(data);
    } else {
      throw Error(await res1.text());
    }

    const res2 = await fetch(forecastUrl);
    if (res2.ok) {
      const data = await res2.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await res2.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();
