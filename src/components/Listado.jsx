import React, { useEffect, useState } from 'react'
import { useGetData } from '../sections/Listado/hooks/useGetData';

export const Listado = () => {
    const { list } = useGetData()

    const [displayList, setDisplayList] = useState([])
    const [isAttending, setIsAttending] = useState([])
    useEffect(() => {
        if (list.length > 0 || displayList.length === 0) {
            setDisplayList(list);
            setIsAttending(displayList
                .filter(it => it.attending !== false)
                .reduce((acc, item) => acc + item.number_of_people,0));
        }
    }, [list, displayList.length])

    // const attending = isAttending
    console.log(isAttending);
    

    return (
        <section className='px-2 md:px-6 w-full mt-28 flex flex-col items-center justify-center'>
            <main className='w-full md:w-[70%]'>

                <h1 className='text-3xl text-center py-1 text-amber-50 bg-emerald-800 w-full rounded-t-lg'>Lista de Registros</h1>
                <section className='flex flex-col-reverse md:flex-row justify-around'>

                    <div className='w-full px-2 my-4 gap-2 flex flex-col items-start'>
                        <p className='text-gray-500 text-2xl'>Tipo de registro</p>
                        <div className='w-auto flex gap-x-4'>
                            <button className={`registrationButton w-24`}>Individual</button>
                            <button className={`registrationButton w-24`}>Pareja</button>
                            <button className={`registrationButton w-24`}>Grupo</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col px-4 md:items-center'>
                            <p>
                                Asistentes
                            </p>
                            <h2 className=" py-1 sm:py-2 text-center tracking-wider text-md sm:text-2xl text-emerald-800  font-bold shadow-sm px-2 border-2 border-emerald-800
                                h-10 w-10 rounded-full md:flex md:justify-center md:items-center md:bg-white/20 hover:scale-110  transition duration-300 ">
                                {isAttending}
                            </h2>
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

// const TResgitration = [{
//     TMeals: [{
//         meat_count: 0,
//         vegetarian_count: 0
//     }],
//     attending: false,
//     created_at: "2024-09-12T23:07:54.896+00:00",
//     description: "",
//     id: "93073388-542d-4c02-ae9c-7c02108e257d",
//     names: "Familia 1",
//     number_of_people: null,
//     registration_type: "grupo"
// }]