import { createStore } from "@reduxjs/toolkit";
import { Map } from "immutable";
import jsStorage from "js-storage";
import { ACTION_TYPES } from "../actions/actions";
import { getWeather } from "../api/api";

const storage = jsStorage.initNamespaceStorage("weather-app").localStorage;

const DATA_TYPES = {
  FAVORITES: "favorites",
  WEATHER: "weather",
  STATE: "state_storage",
  SELECTED: "selected",
  LIKED: "liked",
};

const initialState = Map(storage.get(DATA_TYPES.STATE) || {
  weather: {},
  favorites: [],
  liked: false,
  selected: { now: true },
});

export const store = createStore(reduceSaver);

function init() {
    if(initialState.get(DATA_TYPES.WEATHER).city) return;
    
  getWeather("City").then((weather) =>
    store.dispatch({ type: ACTION_TYPES.SET_WEATHER, content: { weather } })
  );
}

init();

function reduceSaver(state, action) {
  const _state = reducer(state, action);

  storage.set(DATA_TYPES.STATE, _state);
  return _state.set(
    DATA_TYPES.LIKED,
    _state
      .get(DATA_TYPES.FAVORITES)
      .includes(_state.get(DATA_TYPES.WEATHER).city)
  );
}

function reducer(state = initialState, action) {
  const { type, content } = action;

  if (!content) return state;

  const { city, weather, selected } = content;

  switch (type) {
    case ACTION_TYPES.SET_WEATHER:
      return state.set(DATA_TYPES.WEATHER, weather);

    case ACTION_TYPES.CHANGE_FAVORITES:
      const list = new Set(state.get(DATA_TYPES.FAVORITES));

      list[list.has(city) ? "delete" : "add"](city);

      return state.set(DATA_TYPES.FAVORITES, [...list]);

    case ACTION_TYPES.SET_TAB:
      return state.set(DATA_TYPES.SELECTED, selected);

    default:
      break;
  }

  return state;
}
