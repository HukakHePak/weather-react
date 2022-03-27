import { storage } from "../../storage/storage";

const CHANGE_FAVORITES = "change_favorites";

export function changeFavorite(city) {
  return {
    type: CHANGE_FAVORITES,
    payload: {
      city,
    },
  };
}

const initState = storage.get(CHANGE_FAVORITES);

export function favorites(state = initState?.length ? initState : [], action) {
  const { type, payload } = action;

  if (type !== CHANGE_FAVORITES || !payload?.city) return state;

  const { city } = payload;
  const list = new Set(state);

  list[list.has(city) ? "delete" : "add"](city);

  storage.set(CHANGE_FAVORITES, [...list]);
  return [...list];
}
