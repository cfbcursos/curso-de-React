import React from 'react'

function Nota(props){
  return(
    <div>
      <legend>Informe a nota {props.num}</legend>
      <input type="text" name={props.nome} value={props.nota} onChange={(e) => props.setNota(e)} />
    </div>
  )
}

export default Nota