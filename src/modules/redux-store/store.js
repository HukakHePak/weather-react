import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { weather } from "../redux-reducers/weather"
import { favorites } from "../redux-reducers/favorites";

const reducer = combineReducers({
  weather,
  favorites
});

export const store = createStore(reducer);