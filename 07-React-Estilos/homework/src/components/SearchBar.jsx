import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return(
    <div  className={s.container}>
      <input type="text" placeholder="Ciudad..."/>
      <button className={s.btn} onClick={() => props.onSearch("Presionado")}>Agregar</button>
    </div>
  )
};