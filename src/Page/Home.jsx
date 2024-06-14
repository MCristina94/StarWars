import React, { useEffect, useState } from 'react'
import Card from '../Component/Card';

const Home = () => {

    const [personajes, setPersonajes] = useState([]);
    const url = 'https://swapi.dev/api/people/'

    useEffect(() => {

        const fetchPersonajes = async () => {
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Error al traer info de la API')
                }
                const data = await response.json();
                setPersonajes(data.results)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchPersonajes();
    }, [])

    console.log(personajes);
  return (
    <div>
      <h1>Personajes</h1>
      <div>
        {personajes && personajes.map(personaje => <Card key={personaje.id} personaje={personaje}/> )}
      </div>
    </div>
  )
}

export default Home
