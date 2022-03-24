import { useEffect, useState } from "react";
import { SelectButton } from "../SelectButton/SelectButton";
import { ForecastTab } from "../WeatherTab/ForecastTab/ForecastTab";
import { FullTab } from "../WeatherTab/FullTab/FullTab";
import { SimplyTab } from "../WeatherTab/SimplyTab/SimplyTab";
import "./WeatherDisplay.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function WeatherDisplay(props) {
  const { weather, onLike } = props;

  // const { _weather } = useSelector((state) => state.toObject());
  // const dispatch = useDispatch();

  const [active, setActive] = useState({ now: true });

  return (
    <div className="weather-display">
      <SimplyTab
        weather={weather}
        active={active.now}
        onLike={onLike}
        liked={weather.like}
      />
      <FullTab weather={weather} active={active.detail} />
      <ForecastTab weather={weather} active={active.forecast} />

      <div className="weather-display__switcher">
        <SelectButton
          value="Now"
          onClick={() => setActive({ now: true })}
          active={active.now}
        />
        <SelectButton
          value="Detail"
          onClick={() => setActive({ detail: true })}
          active={active.detail}
        />
        <SelectButton
          value="Forecast"
          onClick={() => setActive({ forecast: true })}
          active={active.forecast}
        />
      </div>
    </div>
  );
}
