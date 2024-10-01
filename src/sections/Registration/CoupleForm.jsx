import React, { useState } from 'react'
import { useMealCounter } from './hooks/useMealCounter'
import { MealSelector } from './components/MealSelector'
import { useHandleErrors } from './hooks/useHandleErrors'
import { insertRegistro } from './service/insertRegistro'
import '../../styles/style.css'

export const CoupleForm = () => {
  const [isAttending, setIsAttending] = useState(null)
  const [state, setState] = useState({
    meatCount: 0,
    vegetarianCount: 0,
  })
  const { meatCount, vegetarianCount } = state
  const [isSent, setIsSent] = useState(false)
  const [username, setUSername] = useState('')
  const { incrementMeal, decrementMeal, totalPlates } = useMealCounter(state, setState, 2)
  const { missingAttendance, validatePlates, state: errorState, setState: setErrorState } = useHandleErrors(isAttending, totalPlates, 2)


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
            registration_type: 'pareja',
            attending: isAttending,
            number_of_people: 2,
            meat_count: meatCount,
            vegetarian_count: vegetarianCount,
            description: null
          })
          setIsSent(true);
        } catch (error) {
          console.log('Error al insertar el registro:', error);
        }

      } else if (!attendanceError && !isAttending) {
        try {
          await insertRegistro({
            names: username,
            registration_type: 'pareja',
            attending: isAttending,
            number_of_people: null,
            meat_count: meatCount,
            vegetarian_count: vegetarianCount,
            description: null
          })
          setIsSent(true);
        } catch (error) {
          console.log('Error al insertar el registro:', error);
        }
      } else {
        setIsSent(false)
      }
    }
  }

  const handleUsername = (e) => {
    setUSername(e.target.value.trim())
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

              <label htmlFor="name" className=" text-emerald-800 text-lg px-2">Ingresa los nombres y apellidos de la pareja</label>
              <input
                className="px-2 py-1 bg-transparent outline-none w-full border border-b-gray-400 focus:border-b-emerald-600 focus:border-b-2 transition-all duration-150"
                id='name'
                type="text"
                placeholder='Ej: Melissa Ayala y Pedro Ramírez'
                onChange={handleUsername}
                min={5}
                required
              />
            </div>
            <div id="attending" className="flex flex-col sm:flex-row justify-start items-center gap-x-6 mt-8 w-full ">
              <article className='flex flex-col'>
                <p className="text-xl text-pretty text-emerald-800">¿Contaremos con ustedes para celebrar este momento tan importante?</p>
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
              <div className="flex flex-col sm:flex-row gap-x-6 items-center  mt-8 w-full" >
                <article className='flex flex-col'>
                  <p className="text-xl text-emerald-800"> ¿Qué tipo de menú prefieren?</p>
                  <p className={`text-sm text-pretty text-red-800/80 transition-all ${errorState.platesError ? 'block' : 'hidden'} `}>
                    El número de platos debe coincidir con el número de personas (2)
                  </p>
                </article>
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
            {
              isAttending
                ?
                <p className="text-emerald-800 text-2xl">
                  {username} Gracias por la confirmación, los esperamos para festejar.

                </p>
                :
                <p className="text-emerald-800 text-2xl">
                  {username} Gracias por su registro, esperamos podamos vernos en otra ocasión.
                </p>
            }
            <a className="registrationButton text-xl text-center bottom-0 w-1/3 my-8" href="#home">Ir al inicio</a>
          </section>
      }
      <aside className="w-1/2 px-4 h-[500px] hidden md:block">
        <img
          className="rounded-xl object-cover object-center w-full h-full"
          src='/img/MPProfile.jpg'
          alt="Pedro & Melissa" />
      </aside>

    </section>
  )
}
