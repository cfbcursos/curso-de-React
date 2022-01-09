import React from 'react'

export default function Dados(props) {
  let n1 = 10
  let n2 = 5
  return (
    <section>
      <p>Canal: {props.canal()}</p>
      <p>Youtube: {props.youtube}</p>
      <p>Curso: {props.curso}</p>
      <p>{n1} + {n2} = {props.somar(n1, n2)}</p>
    </section>
  )
}
