import { format } from "date-fns";

export function toCelcius(temperature) {
  return Math.round(temperature - 273);
}

export function convertDate(milisec) {
  if (!milisec) return {};

  const date = new Date(milisec * 1000);

  return {
    time: format(date, "HH:mm"),
    date: format(date, "dd LLL"),
  };
}
