import { useState } from "react";
import "./SearchBar.css";
import searchSvg from "./search-ico.svg";
import React from 'react';

export function SearchBar(props) {
  const { value, onSubmit } = props;

  const [searchValue, setSearchValue] = useState(value ?? "");

  return (
    <form
      className="search"
      onSubmit={(event) => {
        event.preventDefault();

        onSubmit(searchValue);
        setSearchValue("");
      }}
    >
      <input
        className="search__value-inp"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Write city"
      />
      <input
        className="search__submit-btn"
        type="submit"
        style={{ backgroundImage: `url(${searchSvg})` }}
      />
    </form>
  );
}
