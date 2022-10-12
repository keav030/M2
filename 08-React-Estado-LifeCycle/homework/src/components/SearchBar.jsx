import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState()
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}
    onChange={e => {
      setCity(e.target.value)
    }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
      />
      <input className="buton" type="submit" value="Agregar" />
    </form>
  );
}