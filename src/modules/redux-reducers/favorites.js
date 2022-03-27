import { ACTION_TYPES } from "../actions/actions";
import { storage } from "../storage/storage";

const FAVORITES = "favorites";

export function favorites(state = storage.get(FAVORITES) || [], action) {
  const { type, payload } = action;

  if (type !== ACTION_TYPES.CHANGE_FAVORITES) return state;

  const list = new Set(state);

  list[list.has(payload.city) ? "delete" : "add"](payload.city);

  storage.set(FAVORITES, list);

  return [...list];
}