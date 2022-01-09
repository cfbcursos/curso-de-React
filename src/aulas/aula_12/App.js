import React, { useState } from 'react';
import './App.css';

export default function App() {

  const [log, setLog] = useState(false)
  const [cor, setCor] = useState(1)

  const vermelho = { color: "#f00" }
  const verde = { color: "#0f0" }
  const azul = { color: "#00f" }

  const mudaCor = () => {
    setCor(cor + 1)
    if (cor > 2) {
      setCor(1)
    }
  }

  const retCor = (c) => {
    if (c === 1) {
      return vermelho
    } else if (c === 2) {
      return verde
    } else {
      return azul
    }
  }

  const msglogin = () => {
    return "Usuário logado!"
  }

  const msglogoff = () => {
    return "Favor logar!"
  }

  const cumprimento = () => {
    const hora = new Date().getHours()

    if (hora >= 0 && hora < 13) {
      return <p>Bom dia!</p>
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa tarde!</p>
    } else {
      return <p>Boa noite!</p>
    }
  }

  return (
    <>
      <h1 style={retCor(cor)}>CFB Cursos</h1>
      {cumprimento()}
      <p>{log ? msglogin() : msglogoff()}</p>
      <button onClick={() => setLog(!log)}>{log ? "Logoff" : "Login"}</button>
      <button onClick={() => mudaCor()}>Muda cor</button>
    </>
  );
}
