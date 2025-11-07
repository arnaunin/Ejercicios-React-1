import { useState } from 'react';
import { listaAnimales } from '../data/animales.js';

const Ejercicio4 = () => {
  const lista = listaAnimales
  const [text, setText] = useState('')

  const listaFiltrada = lista.filter((animal) => animal.toLowerCase().includes(text.toLowerCase().trim()))

  return (
    <div>
      <h3>Ejercicio 4: Filtro de Búsqueda en Tiempo Real</h3>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <ul className="listaSinPuntos">
        {
          listaFiltrada.map((animal, index) => {
            return (
              <li key={index}>
                {animal}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Ejercicio4
