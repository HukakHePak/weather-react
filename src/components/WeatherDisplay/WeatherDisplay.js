import { useEffect, useState } from "react";
import { SelectButton } from "../SelectButton/SelectButton";
import { ForecastTab } from "../WeatherTab/ForecastTab/ForecastTab";
import { FullTab } from "../WeatherTab/FullTab/FullTab";
import { SimplyTab } from "../WeatherTab/SimplyTab/SimplyTab";
import './WeatherDisplay.css';

export function WeatherDisplay(props) {
  const { weather, onLike, storage, liked } = props;

  const [active, setActive] = useState(
    storage.get("opened-tab") || { now: true }
  );

  useEffect(() => {
    storage.set("opened-tab", active);
  });

  return (
    <div className="weather-display">
      <SimplyTab
        weather={weather}
        active={active.now}
        onLike={onLike}
        liked={liked}
      />
      <FullTab weather={weather} active={active.detail} />
      <ForecastTab weather={weather} active={active.forecast}/>

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
