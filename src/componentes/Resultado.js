import React from 'react'

function Resultado(props) {
  return (
    <div>
      <p>Soma das notas: {props.somaNotas}</p>
      <p>{props.somaNotas >= 24 ? "Aprovado" : "Reprovado"}</p>
    </div>
  )
}

export default Resultado