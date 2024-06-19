import React, { useState } from 'react'

const Card = ({personaje}) => {

  const [like, setLike] = useState(0)

  const handleClick = () =>{
    setLike(like + 1)
  }

  return (
    <div key={personaje.id}>
      <h2>Nombre: {personaje.name}</h2>
      <h3>Genero: {personaje.gender} </h3>
      <h3>Color de Pelo: {personaje.hair_color}</h3>
      <button onClick={handleClick}>Likes {like}</button>
    </div>
  )
}

export default Card
