import { useState } from 'react'

const Ejercicio5 = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(0)

  const parseInput = (value) => value === '' ? null : parseFloat(value);

  const sumar = () => {
    const a = parseInput(num1);
    const b = parseInput(num2);
    if (a === null || b === null) return;
    setResultado(a + b);
  };

  const restar = () => {
    const a = parseInput(num1);
    const b = parseInput(num2);
    if (a === null || b === null) return;
    setResultado(a - b);
  };

  const multiplicar = () => {
    const a = parseInput(num1);
    const b = parseInput(num2);
    if (a === null || b === null) return;
    setResultado(a * b);
  };

  const dividir = () => {
    const a = parseInput(num1);
    const b = parseInput(num2);
    if (a === null || b === null) return;
    if (b === 0) {
      setResultado('No se puede dividir por cero');
    } else {
      setResultado(a / b);
    }
  };

  return (
    <div>
      <h3>Ejercicio 5: Calculadora Sencilla</h3>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
      <br />
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>

      <h4>Resultado: <br />{resultado}</h4>
    </div>
  )
}

export default Ejercicio5
