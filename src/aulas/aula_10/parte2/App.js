import React, { useState } from 'react'
import './App.css'
import Numero from './componentes/Numero'

export default function App() {
  const [num, setNum] = useState(10)
  const [nome, setNome] = useState('Bruno')

  return (
    <section>
      <p>Valor do state num em App: {num}</p>
      <Numero num={num} setNum={setNum} />
      <p>{nome}</p>
    </section>
  );
}
