import { useState } from 'react';

const Ejercicio2 = () => {

  const [clics, setClics] = useState(0);

  const sumarClics = () => {
    setClics(prev => prev + 1)
  }

  return (
    <div>
      <h3>Ejercicio 2: Contador de Clics</h3>
      <button onClick={sumarClics}>Contar Clics</button>
      <p>Clics: {clics}</p>
    </div>
  )
}

export default Ejercicio2
