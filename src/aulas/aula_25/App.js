import React, { useState } from 'react';
import './App.css';
import Carro from './componentes/Carro';

export default function App() {

  const [carro, setCarro] = useState(true)

  const mostrarOcultarCarro = () => {
    setCarro(!carro)
  }

  return (
    <>
      <h1>Componentes de classe</h1>
      {carro ? <Carro fator={10} /> : ''}
      <button onClick={() => mostrarOcultarCarro()}>{carro ? "Ocultar" : "Mostrar"}</button>
    </>
  );
}