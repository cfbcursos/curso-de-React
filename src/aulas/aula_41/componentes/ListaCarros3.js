import React, { useEffect, useState } from 'react'

export default function ListaCarros2() {

  const [carros, setCarros] = useState([])

  useEffect(() => {
    fetch('https://cfbcursosapireactexemplo1.betopinheiro.repl.co')
      .then(res => res.json())
      .then(
        (resultado) => {
          setCarros(resultado)
        }
      )
  })

  return (
    <div>
      {carros.map(
        carro => <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
      )}
    </div>
  )
}