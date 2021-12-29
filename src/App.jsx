import {useState} from 'react';
import Header from './components/Header'
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

    // Desde el formulario va a ir llenando el array de objetos
    const [ pacientesAgregados, setPacientes] = useState([]);

    // Paciente seleccionado al editar 
    const [ pacienteSeleccionado, setPaciente] = useState({});

  return (
    <div className="container mx-auto text-center mt-20">  
          <Header />
          <div className="mt-12 md:flex">
              <Formulario
                pacientesAgregados={pacientesAgregados}
                setPacientes={setPacientes}
                  pacienteSeleccionado={pacienteSeleccionado}
              />
              <ListadoPacientes
                pacientesAgregados={pacientesAgregados} /* se envia todo el array al listado */ 
                setPaciente={setPaciente}
              />
          </div>

    </div>
  )
}

export default App
