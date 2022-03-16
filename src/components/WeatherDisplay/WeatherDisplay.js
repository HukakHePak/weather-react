import { useState } from "react";
import { SelectButton } from "../SelectButton/SelectButton";
import { ForecastTab } from "../WeatherTab/ForecastTab/ForecastTab";
import { FullTab } from "../WeatherTab/FullTab/FullTab";
import { SimplyTab } from "../WeatherTab/SimplyTab/SimplyTab";

export function WeatherDisplay(props) {
  const { weather, onLike, open } = props;

  const [active, setActive] = useState(open || { now: true });

  return (
    <div className="weather__display">
      <SimplyTab weather={weather} active={active.now} onLike={onLike} />
      <FullTab weather={weather} active={active.detail}/>
      {/* <ForecastTab forecast={weather?.forecast} active={active.forecast}/> */}

      <div className="weather__switcher">
        <SelectButton value="Now" onClick={() => setActive({ now: true })} />
        <SelectButton value="Detail" onClick={() => setActive({ detail: true })} />
        <SelectButton value="Forecast" onClick={() => setActive({ forecast: true })}/>
      </div>
    </div>
  );
}
