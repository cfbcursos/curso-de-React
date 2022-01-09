import React from 'react';
import './App.css';
import Caixa from './componentes/Caixa';
import Canal from './componentes/Canal';

export default function App() {

  return (
    <>
      <div>
        <Caixa site="www.cfbcursos.com.br">
          <Canal />
          <p>Curso de React</p>
        </Caixa>
      </div>
    </>
  );
}