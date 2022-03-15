import { ForecastItem } from "../ForecastItem/ForecastItem";

export function ForecastTab(props) {
    const { name, forecast, isActive } = props;

    return (
      <div className={ isActive ? 'forecast-tab--active' : 'forecast-tab' }>
        <span className="forecast-tab__city"> { name } </span>

        <ul className="forecast-tab__stats">
          { forecast.map( item => <ForecastItem value={item} /> ) }
        </ul>
      </div>
    );
}