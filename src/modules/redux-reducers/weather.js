import { ACTION_TYPES } from "../actions/actions";

export function weather(state = {}, action) {
  const { type, payload } = action;

  return type === ACTION_TYPES.SET_WEATHER ? payload.weather : state;
}