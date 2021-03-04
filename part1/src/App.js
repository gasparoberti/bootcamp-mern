import './App.css';
import { Contador } from './Contador';
import { ContadorDoble } from './ContadorDoble';
import Mensaje from './Mensaje';

const Description = ({text}) => {
  return (
    <p>
      {/* Esta es la app de fullstack bootcamp */}
      {text}
    </p>
  )
}

//es lo mismo si usamos funciones comnunes (arriba) o funcion flecha (abajo)
const App = () => {
  return (
    <div className="App">
      <Mensaje color ='red' message='Mensaje pasado por parametro'/>
      <Description text='Probando otra forma de usar parametros'/>
      <Contador />

      <ContadorDoble />
    </div>
  );
}

export default App;
