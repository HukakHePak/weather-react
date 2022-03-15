export function ForecastItem(props) {
    const { feels, weather, temp, date, time, imgAlt } = props;

    return (
        <li className="forecast-card">
            <div className="forecast-card__date-panel">
                <span className="forecast-card__date">{date}</span>
                <span className="forecast-card__time">{time}</span>
            </div>
            <div className="forecast-card__stats">
                <span className="forecast-card__temp">{temp}</span>
                <span className="forecast-card__feels">{feels}</span>
                <figure className="forecast-card__weather">
                    <figcaption className="forecast-card__weather-title">{weather}</figcaption>
                    <img className="forecast-card__weather-img" 
                        src="./img/cloud-ico.svg" 
                        alt={ imgAlt } 
                    />
                </figure>
            </div>
        </li>
    );
}