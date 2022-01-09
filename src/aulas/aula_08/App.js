import React from 'react';
import './App.css';

export default function App() {

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em'
  }

  return (
    <section className="caixa">
      <h1 style={{ color: '#f00', fontSize: '5em' }}>CFB Cursos</h1>
      <h2 style={textoDestaque}>Curso de React</h2>
      <p className="texto">Se inscreva em nosso canal e nos siga no Instagram</p>
      <a href="https://www.youtube.com/cfbcursos" target="_blank">CFB Cursos</a>
    </section>
  );
}
