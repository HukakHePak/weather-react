export const ACTION_TYPES = {
  SET_WEATHER: "set_weather",
  CHANGE_FAVORITES: "change_favorites",
  SET_TAB: "set_active_tab",
};

export function setWeather(weather) {
  return {
    type: ACTION_TYPES.SET_WEATHER,
    payload: {
      weather,
    },
  };
}

export function changeFavorite(city) {
  return {
    type: ACTION_TYPES.CHANGE_FAVORITES,
    payload: {
        city,
    },
  };
}

export function switchTab(selected) {
  return {
    type: ACTION_TYPES.SET_TAB,
    payload: {
        selected,
    },
  };
}
