import React from 'react';

export default function Card(props) {
  // acá va tu código.
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <h5>Minima</h5>
      <p>{props.min}</p>
      <h5>Maxima</h5>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="weather"/>
    </div>
  )
};