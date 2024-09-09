import { useState } from "react"

export const SingleForm = () => {
    const [isAttending, setIsAttending] = useState(false)
    return (
        <section className="w-full my-8 flex ">
            <form className="flex flex-col items-center justify-between w-full md:w-1/2 md:pr-4" >
                <div className="w-full">

                    <label htmlFor="name" className=" text-emerald-800 text-lg px-2">Ingresa tu nombre y apellido</label>
                    <input
                        className="px-2 py-1 bg-transparent outline-none w-full border border-b-gray-400 focus:border-b-emerald-600 focus:border-b-2 transition-all duration-150"
                        id='name'
                        type="text"
                        placeholder='Ej: Lupe Ramírez Ayala' />
                </div>
                <div id="attending" className="flex flex-col sm:flex-row justify-around items-center mt-8 w-full ">
                    <p className="text-xl text-emerald-800">¿Contaremos contigo para celebrar este momento tan importante?</p>
                    <div className="flex items-center my-2 gap-x-2">
                    <button type="button" className="registrationButton w-[50px]">Si</button>
                    <button type="button" className="registrationButton w-[50px]">No</button>
                    </div>
                </div>
                
                <button type="button" className="registrationButton bottom-0 w-1/3 my-8"> Enviar </button>
            </form>
            <aside className="w-1/2 h-[500px] hidden md:block">
                <img
                    className="rounded-xl object-cover object-bottom w-full h-full"
                    src='/img/Lupe.jpg'
                    alt="Lupe Ramírez Ayala" />
            </aside>
        </section>
    )
}
