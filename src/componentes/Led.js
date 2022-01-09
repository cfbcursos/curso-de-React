import React from 'react';
import LedVerde from './img/led_verde.png';
import LedVermelho from './img/led_vermelho.png';

export default function Led(props) {

  return (
    <>
      <img style={{ width: '50px' }} src={props.ligado ? LedVerde : LedVermelho} alt="led vermelho" />
      <button onClick={() => props.setLigado(!props.ligado)}>
         {props.ligado ? "Desligar" : "Ligar"}
      </button>
    </>
  );
}
