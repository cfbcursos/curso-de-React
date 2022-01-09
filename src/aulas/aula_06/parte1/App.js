import React from 'react'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Header from './componentes/Header'

export default function App() {
  const canal = 'CFB Cursos'
  const youtube = 'youtube.com/cfbcursos'
  const curso = 'React'

  return (
    <section>
      <Header />
      <Corpo />
      <Dados canal={canal} youtube={youtube} curso={curso} />
    </section>
  );
}
