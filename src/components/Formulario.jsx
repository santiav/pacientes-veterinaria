import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientesAgregados, setPacientesAgregados, pacienteSeleccionado, setPacienteSeleccionado}) => {

    // Almacena en los states lo que se vaya agregando a los campos del formulario
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    // Si hay un error con los datos
    const [error, setError] = useState(false);

    // Cuando haga click en "editar", el pacienteSeleccionado seteará el state de cada campo del formulario
    // Es decir, como cada campo esta viendo que tiene almacenado el state, se actualiza automaticamente
    useEffect(() => {
        if (Object.keys(pacienteSeleccionado).length > 0) {
            setNombre(pacienteSeleccionado.nombre)
            setPropietario(pacienteSeleccionado.propietario)
            setEmail(pacienteSeleccionado.email)
            setFecha(pacienteSeleccionado.fecha)
            setSintomas(pacienteSeleccionado.sintomas)
        }
    }, [pacienteSeleccionado])


    // Generación de ID (key)
    const uuidv4 = () => { /*https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid/2117523#2117523*/
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    // Al hacer click en "agregar paciente"
    const handleSubmit = (e) => {
        e.preventDefault();

        // validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        } else {
            setError(false);

            // Si los campos estan llenos entonces puedo construir el objeto para llevarlo al array de objetos
            const nuevoPaciente = {
                nombre, propietario, email, fecha, sintomas
            }

            if (pacienteSeleccionado.id) {
                // console.log('editando')
                nuevoPaciente.id = pacienteSeleccionado.id

                const pacientesActualizados = pacientesAgregados.map( item =>  item.id === pacienteSeleccionado.id ? nuevoPaciente : item )
                setPacientesAgregados(pacientesActualizados)
                setPacienteSeleccionado({})

            } else {
                // console.log('nuevo registro')
                console.log(nuevoPaciente)
                nuevoPaciente.id = uuidv4()
                setPacientesAgregados([...pacientesAgregados, nuevoPaciente])
            }


            

        // reiniciar form
            /* setNombre('')
             setPropietario('')
             setEmail('')
             setFecha('')
             setSintomas('') */
        }

      
        
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >


                {/* SI HAY UN ERROR */}
                {/* usando props seria <Error mensaje="Todos los campos son obligatorios"/> */}
                {error && <Error><p>Todos los campos son obligatorios</p></Error> }

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Mascota</label>

                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre de la Mascota"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Propietario</label>

                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="correo">Correo electrónico</label>

                    <input
                        type="email"
                        id="correo"
                        placeholder="Nombre del propietario"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Alta</label>

                    <input
                        type="date"
                        id="alta"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>

                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white cursor-pointer hover:bg-indigo-700 transition-all"
                    value={ pacienteSeleccionado.id ? 'Editar paciente' : 'Agregar paciente' }
                />

            </form>
        </div>
    )
}

export default Formulario
