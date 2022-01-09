import React from 'react';
import Eu from './componentes/img/eu.png';
import Logo from './componentes/img/logo.png';

export default function App() {
  const canal = () => {
    return "CFB Cursos"
  };
  function curso() {
    return "Curso de React";
  }
  return (
    <section>
      <p>Canal: {canal()}</p>
      <p>{curso()}</p>
      <img src={Logo} alt="Logo CFB" />
      <img src={Eu} alt="Bruno P. Campos" />
    </section>
  );
}
