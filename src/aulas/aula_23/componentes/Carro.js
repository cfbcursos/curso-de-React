import React from 'react'

class Carro extends React.Component {

  constructor(props) {
    super(props)
    this.modelo = 'Golf'
    this.state = {
      ligado: false,
      velAtual: 0
    }
  }

  ligarDesligar() {
    // this.setState({ligado: !this.state.ligado})

    // this.setState(
    //   function (state) {
    //     return {
    //       ligado: !state.ligado
    //     }
    //   }
    // )

    this.setState(
      (state) => (
        {
          ligado: !state.ligado
        }
      )
    )
  }

  // acelerar() {
  //   this.setState(
  //     (
  //       (state,props) => (
  //         {velAtual: this.state.velAtual + this.props.fator}
  //       )
  //     )
  //   )
  // }

  acelerar() {
    this.setState(
      (state, props) => (
        { velAtual: state.velAtual + props.fator }
      )
    )
  }

  render() {
    return (
      <>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
        <p>Velocidade atual: {this.state.velAtual}</p>
        <button onClick={() => this.ligarDesligar()}>{this.state.ligado ? "Desligar carro" : "Ligar carro"}</button>
        <button onClick={() => this.acelerar()}>Acelerar</button>
      </>
    )
  }
}

export default Carro