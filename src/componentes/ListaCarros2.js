import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ListaCarros2() {

  const [carros, setCarros] = useState([])

  useEffect(() => {
    axios.get('https://cfbcursosapireactexemplo1.betopinheiro.repl.co')
      .then(res => {
        const dadosCarros = res.data
        setCarros(dadosCarros)
      })
  })

  return (
    <div>
      {carros.map(
        carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
      )}
    </div>
  )
}