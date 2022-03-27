import { useEffect, useState } from "react";
import { getWeather } from "../api/getWeather";

export function useWeather(city) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (city) getWeather(city).then((weather) => setWeather(weather));
  });

  return weather;
}