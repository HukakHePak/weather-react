import { ForecastItem } from "../ForecastItem/ForecastItem";

export function ForecastTab(props) {
    const { city, forecast, isActive } = props;

    return (
      <div className={isActive ? "forecast-tab--active" : "forecast-tab"}>
        <span className="forecast-tab__city"> {city} </span>

        <ul className="forecast-tab__stats">
          { forecast.map((item, index) => (
            <ForecastItem key={index} weather={item} />
          ))}
        </ul>
      </div>
    );
}