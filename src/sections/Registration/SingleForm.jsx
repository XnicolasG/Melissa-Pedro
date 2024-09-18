import { useState } from "react"
import { useHandleErrors } from "./hooks/useHandleErrors"
import { insertRegistro } from "./service/insertRegistro"

export const SingleForm = () => {
    const [isAttending, setIsAttending] = useState(null)
    const [state, setState] = useState({
        meatCount: 0,
        vegetarianCount: 0,
    })
    const { meatCount, vegetarianCount } = state
    const [isMealEmpty, setIsMealEmpty] = useState(null)
    const [isSent, setIsSent] = useState(false)
    const [username, setUSername] = useState('')
    const { missingAttendance, state: errorState, setState: setErrorState } = useHandleErrors(isAttending)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const attendanceError = missingAttendance()
        const hasMeals = meatCount > 0 || vegetarianCount > 0

        setErrorState({
            attendanceError,
        })

        if (!attendanceError) {
            // Verificar si no asistirá
            if (!isAttending) {
                try {
                    await insertRegistro({
                        names: username,
                        registration_type: 'individual',
                        attending: isAttending,
                        number_of_people: 1,
                        meat_count: meatCount,
                        vegetarian_count: vegetarianCount,
                        description: null
                    })
                    setIsSent(true);
                } catch (error) {
                    console.log('Error al insertar registro:', error);
                }
            } else {
                // Verificar si ambos contadores de comida están en 0
                if (state.meatCount === 0 && state.vegetarianCount === 0) {
                    setIsMealEmpty(true);
                    setIsSent(false);
                } else {
                    try {
                        await insertRegistro({
                            names: username,
                            registration_type: 'individual',
                            attending: isAttending,
                            number_of_people: 1,
                            meat_count: meatCount,
                            vegetarian_count: vegetarianCount,
                            description: null
                        })
                        setIsSent(true);
                        setIsMealEmpty(false);
                    } catch (error) {
                        console.log('Error al insertar registro:', error);
                    }
                }
            }
        } else {
            setIsSent(false);
            console.log('Attendance error:', attendanceError);
        }
    }

    const handleUsername = (e) => {
        setUSername(e.target.value.trim())
    }

    console.log(state);
    const handleMeal = (e) => {
        setState((prevState) => (
            {
                ...prevState,
                [e.target.value]: 1
            }
        ))
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
                            <article className='flex flex-col'>
                                <p className="text-xl text-pretty text-emerald-800">¿Contaremos contigo para celebrar este momento tan importante?</p>
                                <p className={`text-sm text-pretty text-red-800/80 transition-all ${errorState.attendanceError ? 'block' : 'hidden'} `}>
                                    recuerda seleccionar una opción para continuar
                                </p>
                            </article>
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
                                <article className="flex flex-col">
                                    <p className="text-xl text-emerald-800"> ¿Qué tipo de menú prefieres?</p>
                                    <p className={`text-pretty text-red-800/80 transition-all ${isMealEmpty ? 'block' : 'hidden'}`}>
                                        Selecciona una opción válida
                                    </p>
                                </article>
                                <select
                                    onChange={handleMeal}
                                    className="bg-transparent p-2 outline-none border-2 border-emerald-700 rounded" name="" id="">
                                    <option value={null} >Selecciona una opción</option>
                                    <option value="meatCount">Carne / pollo</option>
                                    <option value="vegetarianCount">Vegetariano</option>
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
                                    {username} gracias por tu registro, esperamos podamos vernos en otra ocasión.
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
