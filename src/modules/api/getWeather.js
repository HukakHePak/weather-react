import { convertDate, toCelcius } from "../math/some-math";

export const URLS = {
  CURRENT: "https://api.openweathermap.org/data/2.5/weather",
  FORECAST: "https://api.openweathermap.org/data/2.5/forecast",
  ICON: "https://openweathermap.org/img/wn",
  API_KEY: "ba94dbbea1912db3a6700b56b77d5a88",
};

async function requestURL(cityName, url) {
  return fetch(`${url}?q=${cityName}&appid=${URLS.API_KEY}`).then((response) =>
    response.json()
  );
}

export async function getWeather(cityName) {
  if (!cityName) {
    return createErrorResponse("Write city!");
  }

  try {
    const data = await requestURL(cityName, URLS.CURRENT).then(
      simplifyWeatherData
    );
    data.forecast = await requestURL(cityName, URLS.FORECAST).then((res) =>
      res.list.map(simplifyWeatherData)
    );

    data.status = "ok";

    return data;
  } catch (e) {
    return createErrorResponse("Write correct city!");
  }
}

function createErrorResponse(message) {
  return { status: "error", error: new Error(message) };
}

function simplifyWeatherData(data) {
  const { dt, dt_txt, main, weather, sys, name } = data;

  return {
    date: convertDate(dt).date,
    time: dt_txt ? dt_txt.slice(-8, -3) : dt,
    temp: toCelcius(main.temp),
    feels: toCelcius(main.feels_like),
    weather: weather[0].main,
    img: `${URLS.ICON}/${weather[0].icon.slice(0, 2)}n@2x.png`,
    city: name,
    sunrise: convertDate(sys.sunrise).time,
    sunset: convertDate(sys.sunset).time,
    alt: weather[0].description,
  };
}
