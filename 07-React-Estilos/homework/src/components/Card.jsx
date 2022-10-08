import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código.

  return (
    <div className={s.container}>
      <button className={s.cardBtn} onClick={props.onClose}>X</button>
      
      <h3>{props.name}</h3>


      <div className={s.infoCont}>
        <div className={s.temp}>
          <h5>Minima</h5>
          <p>{props.min}</p>
        </div>
        <div className={s.temp}>
          <h5>Maxima</h5>
          <p>{props.max}</p>
        </div>
        

      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="weather"/>

       
    </div>
    
  )
};
