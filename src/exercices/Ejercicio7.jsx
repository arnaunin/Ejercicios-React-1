import { useState } from 'react'

const Ejercicio7 = () => {
  const [longitud, setLongitud] = useState('')
  const [contrasena, setContrasena] = useState('')

  const minusculas = "abcdefghijklmnopqrstuvwxyz"
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeros = "1234567890"
  const caracteresEspeciales = "!@#$%^&*()_+-=[]{};:,.<>?"

  const catalogo = minusculas+mayusculas+numeros+caracteresEspeciales

  const comprobarLongitud = (e) => {
    e.preventDefault();

    if (longitud < 4 || longitud === '') {
      setContrasena('La longitud debe ser mayor o igual a 4')
      return
    } 

    setContrasena(generarContrasena())
  }

  const generarContrasena = () => {
    let contrasena = ''

    for (let i = 0; i < Number(longitud); i++) {
      const caracter = catalogo[Math.floor(Math.random() * catalogo.length)]
      contrasena += caracter
    }

    return contrasena
  }

  return (
    <div>
      <h3>Ejercicio 7: Generador de Contraseñas Aleatorias</h3>
      <p>Introduce la longitud de la contraseña:</p>
      <form onSubmit={comprobarLongitud}>
        <input type="number" value={longitud} onChange={(e) => setLongitud(e.target.value)}/>
        <button type='submit'>Generar contraseña</button>
      </form>
      <p>{contrasena}</p>
    </div>
  )
}

export default Ejercicio7
