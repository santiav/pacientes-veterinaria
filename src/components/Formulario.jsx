import { useState } from 'react';
import Error from './Error'

const Formulario = ({pacientesAgregados, setPacientes}) => {

    // Almacena en los states lo que se vaya agregando a los campos del formulario
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    // Si hay un error con los datos
    const [error, setError] = useState(false);

    // Al hacer click en "agregar paciente"
    const handleSubmit = (e) => {
        e.preventDefault();

        // validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        } 

        setError(false);

        // Si los campos estan llenos entonces puedo construir el objeto para llevarlo al array de objetos
        const nuevoPaciente = {
            nombre, propietario, email, fecha, sintomas
        }

        console.log(nuevoPaciente)
        setPacientes([...pacientesAgregados, nuevoPaciente])

        // reiniciar form
       /* setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('') */
        
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
                {error && <Error mensaje="Todos los campos son obligatorios" /> }

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
                    
                />

            </form>
        </div>
    )
}

export default Formulario
