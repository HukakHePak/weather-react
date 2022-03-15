import closeSvg from './closeSvg';

export function ClosinItem(props) {
  const { title, onClick } = props;

  return (
    <li class="closin-item">
      <span className="closin-item__title"> {title} </span>
      <button
        className="closin-item__close-btn"
        onClick={onClick}
        style={{ backgroundImage: closeSvg }}
      />
    </li>
  );
}