import { SelectButton } from "../SelectButton/SelectButton";
import { ForecastTab } from "../WeatherTab/ForecastTab/ForecastTab";
import { FullTab } from "../WeatherTab/FullTab/FullTab";
import { SimplyTab } from "../WeatherTab/SimplyTab/SimplyTab";
import "./WeatherDisplay.css";
import React from "react";

export function WeatherDisplay(props) {
  const { weather, liked, onLike, selected, onSelect } = props;

  const { now, detail, forecast } = selected;

  return (
    <div className="weather-display">
      <SimplyTab
        weather={weather}
        active={now}
        onLike={onLike}
        liked={liked}
      />
      <FullTab weather={weather} active={detail} />
      <ForecastTab weather={weather} active={forecast} />

      <div className="weather-display__switcher">
        <SelectButton
          value="Now"
          onClick={() => onSelect({ now: true })}
          active={now}
        />
        <SelectButton
          value="Detail"
          onClick={() => onSelect({ detail: true })}
          active={detail}
        />
        <SelectButton
          value="Forecast"
          onClick={() => onSelect({ forecast: true })}
          active={forecast}
        />
      </div>
    </div>
  );
}
