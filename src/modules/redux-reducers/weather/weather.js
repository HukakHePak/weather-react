import { getWeather } from "../../api/getWeather";
import { storage } from "../../storage/storage";

const SET_WEATHER = "set_weather";

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    payload: {
      weather,
    },
  };
}

export function searchWeather(city) {
  return async (dispatch) =>
    getWeather(city).then((weather) => {
      dispatch(setWeather(weather));
      storage.set(SET_WEATHER, weather);
    });
}

export function weather(state = storage.get(SET_WEATHER) || {}, action) {
  const { type, payload } = action;

  return type === SET_WEATHER ? payload.weather : state;
}
