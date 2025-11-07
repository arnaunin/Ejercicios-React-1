import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import * as Ejercicios from './exercices'
import NotFound from './pages/NotFound.jsx'

const Router = () => {

  const nombresEjercicios = Object.keys(Ejercicios)

  return (
    <BrowserRouter basename="/Ejercicios-React-1">
      <Routes>
        <Route path='/' element={<Home ejercicios={nombresEjercicios} />}/>
        {nombresEjercicios.map((nombre) => {
          const Componente = Ejercicios[nombre];
          const numero = nombre.replace('Ejercicio', '');
          return (
            <Route
              key={nombre}
              path={`/ejercicio-${numero}`}
              element={<Componente />}
            />
          )
        })}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
