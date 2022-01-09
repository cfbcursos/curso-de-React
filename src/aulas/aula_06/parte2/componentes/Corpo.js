import React from 'react'
import Dados from './Dados'

export default function Corpo() {
  const canal = 'CFB Cursos'
  const youtube = 'youtube.com/cfbcursos'
  const curso = 'React'

  return (
    <section>
      <h2>Curso de React</h2>
      <p>Se inscreva em nosso Canal</p>
      <p>Ative o sininho e clique no joinha</p>
      <Dados canal={canal} youtube={youtube} curso={curso} />
    </section>
  )
}
