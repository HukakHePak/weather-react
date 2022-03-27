import { SelectButton } from "../SelectButton/SelectButton";
import { ForecastTab } from "../WeatherTab/ForecastTab/ForecastTab";
import { FullTab } from "../WeatherTab/FullTab/FullTab";
import { SimplyTab } from "../WeatherTab/SimplyTab/SimplyTab";
import "./WeatherDisplay.css";
import React from "react";
import { useStorage } from "../../modules/hooks/useStorage";

export function WeatherDisplay(props) {
  const { liked, storage, weather, onLike } = props;

  const [ selected, setSelected ] = useStorage({ now: true }, storage, 'opened-tab');
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
          onClick={() => setSelected({ now: true })}
          active={now}
        />
        <SelectButton
          value="Detail"
          onClick={() => setSelected({ detail: true })}
          active={detail}
        />
        <SelectButton
          value="Forecast"
          onClick={() => setSelected({ forecast: true })}
          active={forecast}
        />
      </div>
    </div>
  );
}
