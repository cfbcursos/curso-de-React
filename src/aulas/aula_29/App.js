import React, { useState } from 'react';
import './App.css';

const carros = [
  { categoria: "Esporte", preco: "110000", modelo: "Golf GTI" },
  { categoria: "Esporte", preco: "120000", modelo: "Camaro" },
  { categoria: "SUV", preco: "85000", modelo: "HRV" },
  { categoria: "SUV", preco: "83000", modelo: "T-Cross" },
  { categoria: "Utilitário", preco: "125000", modelo: "Hilux" },
  { categoria: "Utilitário", preco: "90000", modelo: "Ranger" }
]

const linhas = (cat) => {
  const li = []
  carros.forEach(
    (carro) => {
      if (carro.categoria.toUpperCase() == cat.toUpperCase() || cat == '') {
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const TabelaCarros = (cat) => {
  return (
    <table border='1' style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const pesquisaCategoria = (cat, scat) => {
  return (
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={cat} onChange={(e) => scat(e.target.value)} />
    </div>
  )
}

export default function App() {
  const [categoria, setCategoria] = useState('')
  return (
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      <br />
      {TabelaCarros(categoria)}
    </>
  );
}