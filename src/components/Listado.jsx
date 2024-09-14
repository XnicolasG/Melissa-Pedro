import React, { useEffect, useState } from 'react'
import { getRegistros } from '../sections/Registration/service/getRegistros';
import { useGetData } from '../sections/Listado/hooks/useGetData';

export const Listado = () => {
    const { list } = useGetData()
    return (
        <section className='px-6 w-full mt-8 flex flex-col items-center justify-center'>
            <main className='w-[70%]'>

                <h1 className='text-3xl text-center py-1 text-amber-50 bg-emerald-800 w-full rounded-t-lg'>Lista de Registros</h1>
                <div className='w-full px-2 my-4 gap-2 flex flex-col items-start'>
                    <p className='text-gray-500 text-2xl'>Tipo de registro</p>
                    <div className='w-auto flex gap-x-4'>
                        <button className={`registrationButton w-20`}>Individual</button>
                        <button className={`registrationButton w-20`}>Pareja</button>
                        <button className={`registrationButton w-20`}>Grupo</button>
                    </div>
                </div>
                <table className='w-full'>
                    <thead className='text-amber-50'>
                        <th>Asistencia</th>
                        <th>Nombre</th>
                        <th>Tipo registro</th>
                        <th>P. registradas</th>
                        <th>Platos carne</th>
                        <th>Platos veg</th>
                        <th>Descripción</th>
                    </thead>
                    <tbody>

                        {
                            list.map((item) => (
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