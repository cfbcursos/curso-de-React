import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [nome, setNome] = useState('')
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

      </form>
    </>
  );
}
