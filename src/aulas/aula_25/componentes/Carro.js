import React from 'react'

class Carro extends React.Component {

  constructor(props) {
    super(props)
    this.modelo = 'Golf'
    this.state = {
      ligado: false,
      velAtual: 0
    }
    this.ld = this.ligarDesligar.bind(this)
  }

  ligarDesligar() {
    this.setState({ ligado: !this.state.ligado })
  }

  acelerar() {
    this.setState(
      (state, props) => (
        { velAtual: state.velAtual + props.fator }
      )
    )
  }

  componentDidMount() {
    console.log("O carro foi criado!")
  }

  // componentDidUpdate() {
  //   console.log("O carro foi atualizado!")
  // }

  componentWillUnmount() {
    console.log("O carro foi removido!")
  }

  render() {
    return (
      <>
        <h1>Meu carro</h1>
        <p>Modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
        <p>Velocidade atual: {this.state.velAtual}</p>
        <button onClick={this.ld}>{this.state.ligado ? "Desligar carro" : "Ligar carro"}</button>
        <button onClick={() => this.acelerar()}>Acelerar</button>
      </>
    )
  }
}

export default Carro