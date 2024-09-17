import React, { useState } from 'react'
import { useMealCounter } from './hooks/useMealCounter'
import { MealSelector } from './components/MealSelector'
import { Minus } from '../../components/icons/Minus'
import { Plus } from '../../components/icons/Plus'
import { useHandleErrors } from './hooks/useHandleErrors'
import { useManageMembers } from './hooks/useManageMembers'
import { insertRegistro } from './service/insertRegistro'

export const GroupForm = () => {
    const [isAttending, setIsAttending] = useState(null)
    const [state, setState] = useState({
        meatCount: 0,
        vegetarianCount: 0,
    })
    const { meatCount, vegetarianCount } = state
    const [isSent, setIsSent] = useState(false)
    const [username, setUSername] = useState('')
    const [description, setDescription] = useState('')
    const { incrementMembers, decrementMembers, totalMembers } = useManageMembers()
    const { incrementMeal, decrementMeal, totalPlates } = useMealCounter(state, setState, totalMembers)
    const { missingAttendance, validatePlates, state: errorState, setState: setErrorState } = useHandleErrors(isAttending, totalPlates, totalMembers)
    console.log(username);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const attendanceError = missingAttendance()
        const platesError = validatePlates()
        setErrorState({
            attendanceError,
            platesError
        })

        if (!attendanceError && isAttending) {
            if (!platesError) {
                try {
                    await insertRegistro({
                        names: username,
                        registration_type: 'grupo',
                        attending: isAttending,
                        number_of_people: totalMembers,
                        meat_count: meatCount,
                        vegetarian_count: vegetarianCount,
                        description
                    })
                    setIsSent(true);
                } catch (error) {
                    console.log('Error al insertar el registro:', error);
                }
            }
        } else if (!attendanceError && !isAttending) {
            try {
                await insertRegistro({
                    names: username,
                    registration_type: 'grupo',
                    attending: isAttending,
                    number_of_people: null,
                    meat_count: meatCount,
                    vegetarian_count: vegetarianCount,
                    description
                })
                setIsSent(true);
            } catch (error) {
                console.log('Error al insertar el registro:', error);
            }
        } else {
            setIsSent(false)
        }
    }

    const handleUsername = (e) => {
        setUSername(e.target.value.trim())
    }
    const handleDescription = (e) => {
        setDescription(e.target.value.trim())
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

                            <label htmlFor="name" className=" text-emerald-800 text-lg px-2">Ingresa el nombre de tu grupo familiar</label>
                            <input
                                className="px-2 py-1 bg-transparent outline-none w-full border border-b-gray-400 focus:border-b-emerald-600 focus:border-b-2 transition-all duration-150"
                                id='name'
                                type="text"
                                placeholder='Ej: Familia Ramírez Ayala'
                                onChange={handleUsername}
                                min={5}
                                required
                            />
                        </div>
                        <div id="attending" className="flex flex-col sm:flex-row justify-start items-center gap-x-6 mt-8 w-full ">
                            <article className='flex flex-col'>
                                <p className="text-xl text-pretty text-emerald-800">¿ Contaremos con ustedes para celebrar este momento tan importante ?</p>
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
                            <>
                                <div className='flex flex-col sm:flex-row gap-x-6 items-center  mt-8 w-full'>
                                    <article>
                                        <p className='text-xl  text-emerald-800'>¿ Cuantos integrantes tiene este grupo?</p>
                                        <p className='text-sm text-pretty text-gray-500'>
                                            para registros como grupo mínimo deben ser 3, máximo 10
                                        </p>
                                    </article>
                                    <div className='flex item-center'>
                                        <button
                                            onClick={decrementMembers}
                                            type='button'
                                            className='mealButton'>
                                            <Minus />
                                        </button>
                                        <input
                                            title='Minimo deben ser 3'
                                            value={totalMembers}
                                            className='w-12 px-2 text-center rounded outline-none border border-emerald-700' type="number"
                                            readOnly
                                        />
                                        <button
                                            type='button'
                                            className='mealButton'
                                            onClick={incrementMembers}
                                        >
                                            <Plus />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-x-6 items-center  mt-8 w-full" >
                                    <article className='flex flex-col'>
                                        <p className="text-xl text-emerald-800"> ¿ Que tipo de menú prefieren ?</p>
                                        <p className={`text-sm text-pretty text-red-800/80 transition-all ${errorState.platesError ? 'block' : 'hidden'} `}>
                                            El número de platos debe coincidir con el número de personas ({totalMembers})
                                        </p>
                                    </article>
                                    <MealSelector
                                        meatCount={meatCount}
                                        vegetarianCount={vegetarianCount}
                                        incrementMeal={incrementMeal}
                                        decrementMeal={decrementMeal}
                                    />
                                </div>
                                <section className='flex flex-col gap-x-6  mt-8 w-full'>
                                    <p className='text-xl text-emerald-800'>
                                        ¿ Cuentanos quienes son los {totalMembers ? totalMembers : ''} integrantes de {username ? username : 'este grupo'} ?
                                    </p>
                                    <textarea
                                        onChange={handleDescription}
                                        className='w-full mx-auto rounded p-2 my-2 outline-none'
                                        placeholder='Ej: Pedro Luis Ramírez, Melissa Ayala, Lupe'></textarea>
                                </section>
                            </>
                        }
                        <button className="registrationButton bottom-0 w-1/3 my-8"> Enviar </button>
                    </form>
                    :
                    <section className="flex flex-col justify-center items-center w-full md:w-1/2">

                        {
                            isAttending
                                ?
                                <p className="text-emerald-800 text-2xl">
                                    {username} gracias por la confirmación, los esperamos con los brazos abiertos.

                                </p>
                                :
                                <p className="text-emerald-800 text-2xl">
                                    {username} gracias por su registro, esperamos podamos vernos en otra ocasión.
                                </p>
                        }
                        <a className="registrationButton text-xl text-center bottom-0 w-1/3 my-8" href="#home">Ir al inicio</a>
                    </section>
            }
            <aside className="w-1/2 h-[550px] hidden md:block">
                <img
                    className="rounded-xl object-cover object-center w-full h-full"
                    src='/img/MPL.jpg'
                    alt="Pedro & Melissa" />
            </aside>

        </section>
    )
}
