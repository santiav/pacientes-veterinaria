import Paciente from "./Paciente"

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
            <h2 className="text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>

            <Paciente />
        </div>
    )
}

export default ListadoPacientes
