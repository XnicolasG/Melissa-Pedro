import { useState } from "react"

export const SingleForm = () => {
    const [isAttending, setIsAttending] = useState(null)
    const [isSent, setIsSent] = useState(false)
    const [username, setUSername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username.trim() !== '') {
            setIsSent(true);
        }
    }

    const handleUsername = (e) => {
        setUSername(e.target.value)
    }

    return (
        <section className="w-full my-8 flex ">
            {
                !isSent
                    ?
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center justify-between w-full md:w-1/2 md:pr-4" >
                        <div className="w-full">

                            <label htmlFor="name" className=" text-emerald-800 text-lg px-2">Ingresa tu nombre y apellido</label>
                            <input
                                className="px-2 py-1 bg-transparent outline-none w-full border border-b-gray-400 focus:border-b-emerald-600 focus:border-b-2 transition-all duration-150"
                                id='name'
                                type="text"
                                placeholder='Ej: Lupe Ramírez Ayala'
                                onChange={handleUsername}
                                min={5}
                                required
                            />
                        </div>
                        <div id="attending" className="flex flex-col sm:flex-row justify-start items-center gap-x-6 mt-8 w-full ">
                            <p className="text-xl text-emerald-800">¿ Contaremos contigo para celebrar este momento tan importante ?</p>
                            <div className="flex items-center my-2 gap-x-2">
                                <button
                                    onClick={() => setIsAttending(true)}
                                    type="button"
                                    className={`registrationButton w-[50px] ${isAttending === true && 'registrationButtonActive'}`}
                                >Si
                                </button>
                                <button
                                    onClick={() => setIsAttending(false)}
                                    type="button"
                                    className={`registrationButton w-[50px] ${isAttending === false && 'registrationButtonActive'}`}
                                >No
                                </button>
                            </div>
                        </div>
                        {
                            isAttending &&
                            <div className="flex flex-col sm:flex-row gap-x-6  mt-8 w-full" >
                                <p className="text-xl text-emerald-800"> ¿Que tipo de menú prefieres?</p>
                                <select className="bg-transparent p-2 outline-none border-2 border-emerald-700 rounded" name="" id="">
                                    <option value="carne">Carne / pollo</option>
                                    <option value="vegetariano">Vegetariano</option>
                                </select>
                            </div>
                        }
                        <button className="registrationButton bottom-0 w-1/3 my-8"> Enviar </button>
                    </form>
                    :
                    <section className="flex flex-col justify-center items-center w-full md:w-1/2">
                        {
                            isAttending
                                ?
                                <p className="text-emerald-800 text-2xl">
                                    {username} gracias por tu confirmación, te esperamos para el gran día.

                                </p>
                                :
                                <p className="text-emerald-800 text-2xl">
                                    {username} gracias por su registro, esperamos podamos vernos en otra ocasión.
                                </p>
                        }
                        <a className="registrationButton text-xl text-center bottom-0 w-1/3 my-8" href="#home">Ir al inicio</a>
                    </section>
            }
            <aside className="w-1/2 h-[500px] hidden md:block">
                <img
                    className="rounded-xl object-cover object-bottom w-full h-full"
                    src='/img/Lupe.jpg'
                    alt="Lupe Ramírez Ayala" />
            </aside>

        </section>
    )
}
