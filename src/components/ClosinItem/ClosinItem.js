import closeSvg from './close-icon.svg';

export function ClosinItem(props) {
  const { value, onClick } = props;

  return (
    <li class="closin-item">
      <span className="closin-item__title"> {value} </span>
      <button
        className="closin-item__close-btn"
        onClick={onClick}
        style={{ backgroundImage: closeSvg }}
      />
    </li>
  );
}