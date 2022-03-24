import "./SelectButton.css";
import React from 'react';

export function SelectButton(props) {
  const { value, active, onClick } = props;

  return (
    <button className={"select-button " + ( active ? "select-button--active" : "")} onClick={onClick}>
      {value}
    </button>
  );
}
