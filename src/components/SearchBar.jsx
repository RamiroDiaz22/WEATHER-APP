import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  const handleChange = function (e) {
    setCity(e.target.value);
  };

  return (
    <form className="busqueda-serachBar" onSubmit={handleSubmit}>
      <input
        className="barra-serachBar"
        type="text"
        placeholder="City..."
        value={city}
        name="buscar"
        onChange={handleChange}
      />
      <input className="btn-serachBar" type="submit" value="Search" />
      <button type="submit" className="btn__searchbar">
        <BiSearch />
      </button>
    </form>
  );
}
