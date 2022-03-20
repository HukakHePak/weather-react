import "./SelectButton.css";

export function SelectButton(props) {
  const { value, active, onClick } = props;

  return (
    <button className={"select-button " + ( active ? "select-button--active" : "")} onClick={onClick}>
      {value}
    </button>
  );
}
