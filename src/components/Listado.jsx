import React, { useState } from 'react'
import { useGetData } from '../sections/Listado/hooks/useGetData';
import { useInfoList } from '../sections/Listado/hooks/useInfoList';

export const Listado = () => {
    const { list } = useGetData()
    const [displayList, setDisplayList] = useState([])
    const [value, setValue] = useState('todos')
    const { isAttending, meal } = useInfoList({ list,setDisplayList })
    
    const info = [
        {
            title: 'Asistentes',
            value: isAttending
        },
        {
            title: 'Carne',
            value: meal.meat
        },
        {
            title: 'Veggie',
            value: meal.veggie
        }
    ]
    const buttons = ['Todos', 'Individual', 'Pareja', 'Grupo']

    function handleFilter(e){
        e.preventDefault()
        const selectedValue = e.target.value;
        setValue(selectedValue)
        const filteredList = selectedValue === 'todos' ? list : list.filter((item) => item.registration_type === selectedValue)
        setDisplayList(filteredList)
    }

    return (
        <section className='px-2 md:px-6 w-full mt-28 flex flex-col items-center justify-center'>
            <main className='w-full md:w-[70%]'>

                <h1 className='text-3xl text-center py-1 text-amber-50 bg-emerald-800 w-full rounded-t-lg'>Lista de Registros</h1>
                <section className='flex flex-col-reverse md:flex-row justify-around'>

                    <div className='w-full px-2 my-4 gap-2 flex flex-col items-start'>
                        <p className='text-gray-500 text-2xl'>Tipo de registro</p>
                        <div className='w-full flex gap-x-4'>
                            {
                                buttons.map((btn) =>{
                                    const title = btn.toLocaleLowerCase() 
                                    return (
                                    <button
                                    key={btn}
                                    value={title}
                                    onClick={handleFilter}
                                    className={`${value === title && 'registrationButtonActive'} registrationButton  w-24`}
                                    >{btn}
                                    </button>
                                )}
                            )
                            }
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-x-4 px-4 '>
                            {
                                info.map((item) => (

                                    <article key={item.title} className='flex flex-col items-center'>
                                        <p>
                                            {item.title}
                                        </p>
                                        <h2 className=" py-1 sm:py-2 text-center tracking-wider text-md sm:text-2xl text-emerald-800  font-bold shadow-sm px-2 border-2 border-emerald-800
                                h-10 w-10 rounded-full md:flex md:justify-center md:items-center md:bg-white/20 hover:scale-110  transition duration-300 ">
                                            {item.value}
                                        </h2>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='overflow-x-scroll'>
                    <table className='w-full '>
                        <thead className='text-amber-50'>
                            <tr className=''>
                                <th className='border border-white' scope="col">Asistencia</th>
                                <th className='border border-white' scope="col">Nombre</th>
                                <th className='border border-white' scope="col">Tipo registro</th>
                                <th className='border border-white' scope="col">P. registradas</th>
                                <th className='border border-white' scope="col">Platos carne</th>
                                <th className='border border-white' scope="col">Platos veg</th>
                                <th className='border border-white' scope="col">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                displayList.map((item) => (
                                    <tr
                                        key={item.id}
                                        className='text-center odd:bg-white even:bg-emerald-600/50'
                                    >
                                        <td>{item.attending ? 'Si' : 'No'}</td>
                                        <td>{item.names}</td>
                                        <td>{item.registration_type}</td>
                                        <td>{item.number_of_people}</td>
                                        {item.TMeals?.map((plate, index) => (
                                            <React.Fragment key={index}>
                                                <td>{plate.meat_count}</td>
                                                <td>{plate.vegetarian_count}</td>
                                            </React.Fragment>
                                        ))
                                        }
                                        <td>{item.description}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>

            </main>
        </section>
    )
}