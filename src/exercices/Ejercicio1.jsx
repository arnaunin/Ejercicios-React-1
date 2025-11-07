import { useState, useEffect } from 'react';

const Ejercicio1 = () => {
  const [color, setColor] = useState('#ffffff');

  const cambiarColor = () => {
    const nuevoColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, [color]);

  return (
    <div>
      <h3>Ejercicio 1: Cambiador de Color de Fondo</h3>
      <button onClick={cambiarColor}>Cambiar color</button>
      <p>Color actual: {color}</p>
    </div>
  );
};

export default Ejercicio1;
