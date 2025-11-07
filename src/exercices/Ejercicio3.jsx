import { useState } from 'react';

const Ejercicio3 = () => {
  const [texto, setTexto] = useState('')
  const [lista, setLista] = useState([])

  const agregarElemento = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    setLista([...lista, texto])
    setTexto('')
  }

  const eliminarElemento = (indiceAEliminar) => {
    setLista(lista.filter((_, index) => index !== indiceAEliminar))
  }

  return (
    <div>
      <h3>Ejercicio 3: Lista Dinámica</h3>
      <form onSubmit={agregarElemento}>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
        <button type='submit'>Agregar</button>
      </form>
      <ul>
        {lista.map((elemento, index) => {
          return (
            <li key={index}>
              {elemento}
              <button onClick={() => eliminarElemento(index)}>Eliminar</button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Ejercicio3
