import React from 'react';
import './App.css';

export default function App() {

  const carros1 = ["HRV", "Golf", "Focus", "Cruze", "Argo"]

  const carros2 = [
    { categoria: "Esporte", preco: 110000.00, modelo: "Golf GTI" },
    { categoria: "Esporte", preco: 120000.00, modelo: "Camaro" },
    { categoria: "SUV", preco: 85000.00, modelo: "HRV" },
    { categoria: "SUV", preco: 83000.00, modelo: "T-Cross" },
    { categoria: "Utilitário", preco: 120000.00, modelo: "Hillux" },
    { categoria: "Utilitário", preco: 90000.00, modelo: "Ranger" },
  ]

  const listaCarros1 = carros1.map((elemento, index) => <li key={index}>{elemento}</li>)
  const listaCarros2 = carros2.map((elemento, index) =>
    <li key={index}>
      Modelo: {elemento.modelo} - Categoria: {elemento.categoria} - Preço: R${elemento.preco}
    </li>)

  return (
    <>
      <h1>Lista de carros - 1</h1>
      <ol>
        {listaCarros1}
      </ol>

      <h1>Lista de carros - 2</h1>
      <ol>
        {listaCarros2}
      </ol>
    </>
  );
}
