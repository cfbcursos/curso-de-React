import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [nome, setNome] = useState('')

  return (
    <>
      <form action="">

        <label htmlFor="fnome">Digite seu nome</label>
        <input
          type="text"
          name="fnome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>Nome digitado: {nome}</p>

      </form>
    </>
  );
}
