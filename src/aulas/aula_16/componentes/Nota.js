import React from 'react'

function Nota(props) {
  return (
    <div>
      <legend>Informe a nota {props.num}</legend>
      <input type="text" value={props.nota} onChange={(e) => props.setNota(e.target.value)} />
    </div>
  )
}

export default Nota