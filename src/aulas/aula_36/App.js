import React, { useState } from 'react';
import './App.css';

export default function App() {

  // ESTILOS

  const tabu = {
    display: 'flex',
    flexDirection: 'column'
  }
  const tabuLinha = {
    display: 'flex',
    flexDirection: 'row'
  }
  const casa = {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    fontSize: 60,
    border: '1px solid #000'
  }

  const jogoInicial = [['', '', ''], ['', '', ''], ['', '', '']]

  const [jogo, setJogo] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [simboloAtual, setSimboloAtual] = useState('X')
  const [jogando, setJogando] = useState(true)

  const tabuleiro = (j) => {
    return (
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos='00' onClick="">{j[0][0]}</div>
          <div style={casa} data-pos='01' onClick="">{j[0][1]}</div>
          <div style={casa} data-pos='02' onClick="">{j[0][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='10' onClick="">{j[1][0]}</div>
          <div style={casa} data-pos='11' onClick="">{j[1][1]}</div>
          <div style={casa} data-pos='12' onClick="">{j[1][2]}</div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos='20' onClick="">{j[2][0]}</div>
          <div style={casa} data-pos='21' onClick="">{j[2][1]}</div>
          <div style={casa} data-pos='22' onClick="">{j[2][2]}</div>
        </div>
      </div>
    )
  }

  const verificaVitoria = () => {
    // linhas
    let pontos = 0
    let vitoria = false
    for (let l = 0; l < 3; l++) {
      pontos = 0;
      for (let c = 0; c < 3; c++) {
        if (jogo[l][c] == simboloAtual) {
          pontos++
        }
      }
      if (pontos >= 3) {
        vitoria = true
        break
      }
    }

    // colunas
    for (let c = 0; c < 3; c++) {
      pontos = 0
      for (let l = 0; l < 3; l++) {
        if (jogo[l][c] == simboloAtual) {
          pontos++
        }
      }
      if (pontos >= 3) {
        vitoria = true
        break
      }
    }

    // diagonais
    pontos = 0
    for (let d = 0; d < 3; d++) {
      if (jogo[d][d] == simboloAtual) {
        pontos++
      }
    }
    if (pontos >= 3) {
      vitoria = true
    }

    pontos = 0
    let l = 0
    for (let c = 2; c >= 0; c--) {
      if (jogo[l][c] == simboloAtual) {
        pontos++
      }
      l++
    }
    if (pontos >= 3) {
      vitoria = true
    }
    return vitoria
  }

  const trocaJogador = () => {
    simboloAtual == 'X' ? setSimboloAtual('O') : setSimboloAtual('X')
  }

  const retPos = (e) => {
    const p = e.target.getAttribute('data-pos')
    const pos = [parseInt(p.substring(0, 1)), parseInt(p.substring(1, 2))]
    return pos
  }

  const verificaEspacoVazio = (e) => {
    if (jogo[retPos(e)[0]][retPos(e)[1]] == '') {
      return true
    } else {
      return false
    }
  }

  return (
    <>

    </>
  );
}