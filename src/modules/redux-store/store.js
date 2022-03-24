import { createStore } from "@reduxjs/toolkit";
import { Map } from "immutable";
import jsStorage from "js-storage";
import { ACTION_TYPES } from "../actions/actions";
import { getWeather } from "../api/api";

const storage = jsStorage.initNamespaceStorage("weather-app").localStorage;

const DATA_TYPES = {
  FAVORITES: "favorites",
  WEATHER: "weather",
};

const initialState = Map({
  weather: {},
  favorites: storage.get(DATA_TYPES.FAVORITES) || [],
});

export const store = createStore(reducer);

// store.dispatch({type: "CHANGE_FAVORITE", content: { city: "City"}});

getWeather("City").then((weather) =>
  store.dispatch({ type: ACTION_TYPES.SET_WEATHER, content: { weather } })
);

function reducer(state = initialState, action) {
  const { type, content } = action;

  if (!content) return state;

  const { city, weather } = content;

  switch (type) {
    case ACTION_TYPES.SET_WEATHER:
      weather.like = state.get(DATA_TYPES.FAVORITES).includes(weather.city);

      storage.set(DATA_TYPES.WEATHER, weather);
      return state.set(DATA_TYPES.WEATHER, weather);

    case ACTION_TYPES.CHANGE_FAVORITES:
      const list = new Set(state.get(DATA_TYPES.FAVORITES));

      list[list.has(city) ? "delete" : "add"](city);

      storage.set(DATA_TYPES.FAVORITES, [...list]);
      return state.set(DATA_TYPES.FAVORITES, [...list]);

    default:
      break;
  }

  return state;
}
