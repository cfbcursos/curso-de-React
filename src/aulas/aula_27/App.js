import React, { useState } from 'react';
import './App.css';
import Globais from './componentes/Globais';
import Info from './componentes/Info';

export default function App() {

  const [resumo, setResumo] = useState(Globais.resumo)

  const gravarResumo = () => {
    Globais.resumo = resumo;
  }

  const verResumo = () => {
    alert(Globais.resumo)
  }

  return (
    <>
      <Info />
      <hr />
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr />
      <input size="100" type="text" value={resumo} onChange={(e) => setResumo(e.target.value)} />
      <br />
      <button onClick={() => gravarResumo()}>Gravar resumo</button>
      <button onClick={() => verResumo()}>Ver resumo</button>
    </>
  );
}