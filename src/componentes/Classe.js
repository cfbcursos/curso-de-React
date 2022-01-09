import React from 'react'

class Classe extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <h1>Primeiro Componente de Classe</h1>
        <p>Canal: {this.props.canal } </p>
        <p>Curso: {this.props.curso}</p>
      </>
    )
  }
}

export default Classe