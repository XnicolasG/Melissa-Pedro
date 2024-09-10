import React, { useState } from 'react'
import { useMealCounter } from './hooks/useMealCounter'
import { MealSelector } from './components/MealSelector'

export const GroupForm = () => {
    const [isAttending, setIsAttending] = useState(false)
    const [state, setState] = useState({
        meatCount: 0,
        vegetarianCount: 0,
    })
    const { meatCount, vegetarianCount } = state
    const [isSent, setIsSent] = useState(false)
    const [username, setUSername] = useState('')
    let maxLimit = 5;
    const { incrementMeal, decrementMeal } = useMealCounter(state, setState, maxLimit)


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
                            <p className="text-xl text-emerald-800">¿ Contaremos ustedes para celebrar este momento tan importante ?</p>
                            <div className="flex items-center my-2 gap-x-2">
                                <button
                                    onClick={() => setIsAttending(true)}
                                    type="button"
                                    className="registrationButton w-[50px]"
                                >Si
                                </button>
                                <button
                                    onClick={() => setIsAttending(false)}
                                    type="button"
                                    className="registrationButton w-[50px]"
                                >No
                                </button>
                            </div>
                        </div>
                        {
                            isAttending &&
                            <div className="flex flex-col sm:flex-row gap-x-6 items-center  mt-8 w-full" >
                                <p className="text-xl text-emerald-800"> ¿ Que tipo de menú prefieren ?</p>
                                <MealSelector
                                    meatCount={meatCount}
                                    vegetarianCount={vegetarianCount}
                                    incrementMeal={incrementMeal}
                                    decrementMeal={decrementMeal}
                                />
                            </div>
                        }
                        <button className="registrationButton bottom-0 w-1/3 my-8"> Enviar </button>
                    </form>
                    :
                    <section className="flex flex-col justify-center items-center w-full md:w-1/2">

                        <p className="text-emerald-800 text-2xl">
                            {username} gracias por su registro
                        </p>
                        <a className="registrationButton text-xl text-center bottom-0 w-1/3 my-8" href="/">Ir al inicio</a>
                    </section>
            }
            <aside className="w-1/2 h-[550px] hidden md:block">
                <img
                    className="rounded-xl object-cover object-center w-full h-full"
                    src='/img/MPProfile.jpg'
                    alt="Pedro & Melissa" />
            </aside>

        </section>
    )
}
