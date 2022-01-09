import React from 'react'

function Caixa(props){
  return(
    <>
      <p>{props.site}</p>
      {props.children}
      {props.children[0]}
      {props.children[1]}

    </>
  )
}

export default Caixa