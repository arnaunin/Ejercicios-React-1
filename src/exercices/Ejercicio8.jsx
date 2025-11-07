import React, { useState } from 'react'

const Ejercicio8 = () => {
  const [texto, setTexto] = useState('')
  const [caracteres, setCaracteres] = useState(0)
  const [palabras, setPalabras] = useState(0)

  const contarCaracteres = (texto) => {
    texto = texto.replace(/\s/g, "")
    return texto.length
  }

  const contarPalabras = (texto) => {
    if (texto.trim() === "") return 0
    return texto.trim().split(/\s+/).length
  }


  return (
    <div>
      <h3>Ejercicio 8: Contador de Palabras y Caracteres</h3>
      <h5>Introduce el texto que quieras:</h5>
      <textarea
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value)
          setCaracteres(contarCaracteres(e.target.value))
          setPalabras(contarPalabras(e.target.value))
        }}
      />
      <p>Caracteres totales: {caracteres}</p>
      <p>Palabras totales: {palabras}</p>
    </div>
  )
}

export default Ejercicio8