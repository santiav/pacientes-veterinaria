const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >

                {/* SI HAY UN ERROR */}
                {/* usando props seria <Error mensaje="Todos los campos son obligatorios"/> */}


                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Mascota</label>

                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre de la Mascota"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                        
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Propietario</label>

                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"

                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="correo">Correo electrónico</label>

                    <input
                        type="email"
                        id="correo"
                        placeholder="Nombre del propietario"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Alta</label>

                    <input
                        type="date"
                        id="alta"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>

                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="w-full border-2 p-2 mt-2 placeholder-zinc-400 rounded-md"

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
