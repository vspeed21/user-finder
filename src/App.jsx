import { useState, useEffect } from 'react'
import Spinner from '../../../OneDrive/Documentos/Udemy Projects/React-Proyects/cryptos-react/src/components/Spinner';
import Buscador from "./components/Buscador"
import Error from './components/Error';
import Resultado from './components/Resultado';

function App() {

  const [users, setUsers] = useState('');
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    if(users !== '') {
      const consultarAPI = async () => {
        setUsers('')
        setCargando(true)
        const url = `https://api.github.com/users/${users}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setResultado(result);

        setCargando(false)

      }
      consultarAPI()
    }
  }, [users]);

  return (
    <div className="contenedor">
      <h1 className="titulo">UserFinder</h1>
      <Buscador 
        setUsers={setUsers}
        resultado={resultado}
      />

      {cargando && <Spinner />}
      
      {resultado.login &&
        <Resultado
          resultado={resultado} 
        />
      }
    </div>
  )
}

export default App
