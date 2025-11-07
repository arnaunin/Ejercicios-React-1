import { Link } from "react-router-dom";

export default function Home({ ejercicios }) {
  return (
    <div>
      <h1>Proyecto de ejercicios con ReactJS</h1>
      <h2>Relación de Ejercicios</h2>
      <ul className="listaSinPuntos">
        {ejercicios.map((nombre) => {
          const numero = nombre.replace("Ejercicio", "");
          return (
            <li key={nombre}>
              <Link to={`/ejercicio-${numero}`}>{nombre}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
