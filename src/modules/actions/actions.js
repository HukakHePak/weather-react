export const ACTION_TYPES = {
    SET_WEATHER: 'find_weather',
    CHANGE_FAVORITES: 'change_favorites',
    SET_ACTIVE_TAB: 'set_active_tab',
}

function boundPatchWeather(weather) {
    const action = {
        type: ACTION_TYPES.SET_WEATHER,
        content: {
          weather,
        }
    };
}