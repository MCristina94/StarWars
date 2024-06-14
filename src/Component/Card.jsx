import React from 'react'

const Card = ({personaje}) => {
  return (
    <div>
      <h2>Nombre: {personaje.name}</h2>
      <h3>Genero: {personaje.gender} </h3>
      <h3>Color de Pelo: {personaje.hair_color}</h3>
    </div>
  )
}

export default Card
