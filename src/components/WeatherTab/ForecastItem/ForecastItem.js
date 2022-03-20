import "./ForecastItem.css";

export function ForecastItem(props) {
  const { weather } = props;
  const { feels, temp, date, time, alt, img } = weather || {};

  return (
    <li className="forecast-card">
      <div className="forecast-card__date-panel">
        <span className="forecast-card__date">{date}</span>
        <span className="forecast-card__time">{time}</span>
      </div>

      <div className="forecast-card__stats">
        <ul className="forecast-card__details">
          <li>Temperature: {temp}</li>
          <li>Feels like: {feels}</li>
        </ul>

        <figure className="forecast-card__weather">
          <img className="forecast-card__weather-img" src={img} alt={alt} />
        </figure>
      </div>
    </li>
  );
}
