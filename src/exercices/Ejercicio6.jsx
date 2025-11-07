import React, { useEffect, useState } from 'react'

const Ejercicio6 = () => {
  const [tiempo, setTiempo] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1)
      }, 1000)
    } else {
      clearInterval(intervalId)
    }

    return () => {
      clearInterval(intervalId)
    }

  }, [isRunning])

  const iniciar = () => {
    setIsRunning(true)
  }

  const pausar = () => {
    setIsRunning(false)
  }
  
  const reiniciar = () => {
    setTiempo(0)
    setIsRunning(false)
  }

  const formatearTiempo = () => {

    const horas = Math.floor(tiempo / 3600)
    const minutos = Math.floor((tiempo % 3600) / 60)
    const segundos = tiempo % 60

    const formatoHoras = horas.toString().padStart(2, "0")
    const formatoMinutos = minutos.toString().padStart(2, "0")
    const formatoSegundos = segundos.toString().padStart(2, "0")

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
  }

  return (
    <div>
      <h3>Ejercicio 6: Temporizador con Inicio, Pausa y Reinicio</h3>
      <h4>Tiempo transcurrido:</h4>
      <strong>
        <p>{formatearTiempo()}</p>
      </strong>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Ejercicio6
