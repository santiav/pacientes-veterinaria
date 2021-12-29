import {useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

    // Desde el formulario va a ir llenando el array de objetos
    const [ pacientesAgregados, setPacientesAgregados] = useState([]);

    // Paciente seleccionado al editar 
    const [ pacienteSeleccionado, setPacienteSeleccionado] = useState({});

    useEffect(() => {
        /* cuando el parámetro es un arreglo vacio, solo se carga una vez */
        let pacientesExistentes = JSON.parse(localStorage.getItem('pacientes')) ?? []
        setPacientesAgregados(pacientesExistentes)
    }, [])

    // actualizar el localstorage
    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientesAgregados))
    }, [pacientesAgregados])

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientesAgregados.filter( item => item.id !== id)
        setPacientesAgregados(pacientesActualizados)
    }

    return (
        <div className="container mx-auto text-center mt-20">  
            <Header />
            <div className="mt-12 md:flex">
                    <Formulario
                        pacientesAgregados={pacientesAgregados}
                        setPacientesAgregados={setPacientesAgregados}
                        pacienteSeleccionado={pacienteSeleccionado}
                        setPacienteSeleccionado={setPacienteSeleccionado}
                    />
                    <ListadoPacientes
                        pacientesAgregados={pacientesAgregados} /* se envia todo el array al listado */ 
                        setPacienteSeleccionado={setPacienteSeleccionado}
                        eliminarPaciente={eliminarPaciente}
                    />
            </div>

        </div>
    )
}

export default App
