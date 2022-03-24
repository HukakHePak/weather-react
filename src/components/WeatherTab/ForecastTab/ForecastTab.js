import { ForecastItem } from "../ForecastItem/ForecastItem";
import './ForecastTab.css';
import React from 'react';

export function ForecastTab(props) {
    const { weather, active } = props;

    return (
      <div className={"forecast-tab " + (active && "forecast-tab--active")}>
        <div className="forecast-tab__city"> {weather?.city} </div>

        <ul className="forecast-tab__stats">
          { weather?.forecast?.map((item, index) => (
            <ForecastItem key={index} weather={item} />
          ))}
        </ul>
      </div>
    );
}