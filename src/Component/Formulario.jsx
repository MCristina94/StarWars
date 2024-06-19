import React, { useState } from 'react'

const Formulario = () => {

    const [usuario, setUsuario] = useState({
        name: '',
        age: 0,
        email: ''
    })
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(usuario.name && usuario.age && usuario.email){
            setError(false);
            setShow(true);
        }else{
            setError(true);
            setShow(false);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={usuario.name} onChange={(event) => setUsuario({...usuario, name: event.target.value})} />
        <label>Age: </label>
        <input type='number' name='age' value={usuario.age} onChange={(event) => setUsuario({...usuario, age: event.target.value})} />
        <label>Email: </label>
        <input type='email' name='email' value={usuario.email} onChange={(event) => setUsuario({...usuario, email: event.target.value})} />
        <button>Send</button>
        {show && <h1>Gracias por enviarnos tu informacion {usuario.name}</h1>}
        {error && <h1 style={{color: 'red'}}>Revisa si toda la informacion se encuentra correcta</h1>}
      </form>
    </div>
  )
}

export default Formulario
