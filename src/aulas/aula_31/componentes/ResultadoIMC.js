import React from 'react';

export default function ResultadoIMC (props) {
  return (
    <div>
      <p>Resultado: {props.r.toFixed(2)}</p>
    </div>
  )
}