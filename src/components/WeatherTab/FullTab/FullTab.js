export function FullTab(props) {
    const { weather, active } = props;
    const { temp, feels, city, sunrise, sunset } = weather || {};

    return (
      <div className={ active ? 'full-tab--active' : 'full-tab' }>
        <span className="full-tab__city"> { city } </span>

        <ul className="full-tab__stats">
          <li> Temperature:{ temp }° </li>
          <li> Feels like:{ feels }° </li>
          <li> Weather: { weather.weather } </li>
          <li> Sunrise: { sunrise } </li>
          <li> Sunset: { sunset } </li>
        </ul>
      </div>
    );
}