export function FullTab(props) {
    const { feels, weather, temp, name, sunrise, sunset, isActive } = props;

    return (
      <div className={ isActive ? 'full-tab--active' : 'full-tab' }>
        <span className="full-tab__city"> { name } </span>

        <ul className="full-tab__stats">
          <li> Temperature:{ temp }° </li>
          <li> Feels like:{ feels }° </li>
          <li> Weather: { weather } </li>
          <li> Sunrise: { sunrise } </li>
          <li> Sunset: { sunset } </li>
        </ul>
      </div>
    );
}