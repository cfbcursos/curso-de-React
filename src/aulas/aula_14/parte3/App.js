import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('HRV')

  const handleChangeNome = (e) => {
    setNome(e.target.value)
  }

  return (
    <>
      <form action="">

        <label htmlFor="fnome">Digite seu nome</label>
        <input
          type="text"
          name="fnome"
          value={nome}
          onChange={(e) => handleChangeNome(e)}
        />
        <p>Nome digitado: {nome}</p>

        <label htmlFor={carro}>Selecione um carro</label>
        <select value={carro} onChange={(e) => setCarro(e.target.value)}>
          <option value="HRV">HRV</option>
          <option value="Golf">Golf</option>
          <option value="Cruze">Cruze</option>
          <option value="Argo">Argo</option>
        </select>
        <p>Carro selecionado: {carro}</p>

      </form>
    </>
  );
}
