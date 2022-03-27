import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { weather } from "../redux-reducers/weather/weather";
import { favorites } from "../redux-reducers/favorites/favorites";
import ThunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  weather,
  favorites,
});

export const store = createStore(reducer, applyMiddleware(ThunkMiddleware));
