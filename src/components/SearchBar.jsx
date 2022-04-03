import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const handleSubmit = function(e) {
    e.preventDefault();
    onSearch(city);
    setCity("")
  }

  const handleChange = function(e) {
    setCity(e.target.value)
  }
  
  return (
    <form
      className="busqueda-serachBar"
      onSubmit={handleSubmit}>
      <input
        className="barra-serachBar"
        type="text"
        placeholder="Ciudad..."
        value={city}
        name="buscar"
        onChange={handleChange}
      />
      <input
        className="btn-serachBar"
        type="submit"
        value="Agregar" />
    </form>
  );
}
