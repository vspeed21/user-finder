import { useState } from 'react'
import Error from './Error';

const Buscador = ({setUsers, resultado}) => {

  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if(user === '') {
      setError(true);

      setTimeout(() => {
        setError(false)
      }, 2000);
      return;
    }

    setError(false);

    setUsers(user);
  }

  return (
    <div className=''>
      <form 
        onSubmit={handleSubmit}
        className="formulario">
        <input 
          className='buscador-input'
          type="text" 
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder='Search user GitHub'
        />

        <input 
          className='btn-buscador'
          type="submit" 
          value="Search" 
        />
      </form>

      {error && <Error mensaje='El campo no puede ir vacio'/>}

    </div>
  )
}

export default Buscador