import closeSvg from "./close-icon.svg";
import './ClosinSelectItem.css'

export function ClosinSelectItem(props) {
  const { value, onOpen, onClose } = props;

  function clickHandler(event) {
    const tag = event.target.tagName;

    if (tag === "BUTTON") {
      console.log("button");
      onClose(value);
      return;
    }

    onOpen(value);
  }

  return (
    <li className="closin-item">
      <span className="closin-item__title" onClick={clickHandler}>
        {value}
      </span>
      <button
        className="closin-item__close-btn"
        onClick={clickHandler}
        style={{ backgroundImage: `url(${closeSvg})` }}
      />
    </li>
  );
}
