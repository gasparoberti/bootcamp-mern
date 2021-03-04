import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return (
    <p>
      Esta es la app de fullstack bootcamp
    </p>
  )
}

//es lo mismo si usamos funciones comnunes (arriba) o funcion flecha (abajo)
const App = () => {
  return (
    <div className="App">
      <Mensaje color ='red' message='Mensaje pasado por parametro'/>
      <Description />
    </div>
  );
}

export default App;
