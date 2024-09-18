import Light from "./icons/Light"
import '../styles/style.css'
import { SingleForm } from "../sections/Registration/SingleForm"
import { CoupleForm } from "../sections/Registration/CoupleForm"
import { GroupForm } from "../sections/Registration/GroupForm"
import { useState } from "react"
import WhatsApp from "./icons/WhatsApp"


export const Registration = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleFormSwitch = (index) => {
        setActiveIndex(index);
    }
    return (
        <section id="Registro" className="flex flex-col my-8 w-[90%] md:w-3/3 mx-auto ">
            <h2 className="mx-auto text-center text-amber-50 text-4xl md:text-5xl bg-emerald-800 py-2 pb-3 w-full rounded-t-xl">
                        Registro
            </h2>
            <div className="flex flex-col gap-6 px-4 py-2">

                <article className="w-full mx-auto flex flex-col items-end p-2 md:p-4 -ml-[6%]">
                    <h3 className="border-b border-gray-400 text-xl md:text-3xl uppercase text-gray-500">
                        Save the date
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl">DIC 7, 2024</p>
                </article>
                <aside className="w-full flex justify-center items-start gap-x-4 ring-2 ring-amber-300 bg-amber-100 p-4 rounded-r-xl rounded-3xl rounded-ss-none">
                    <div className="w-[10%] md:w-[4%]">
                        <a href="/Registro">
                            <Light />
                        </a>
                    </div>
                    <article className="w-[90%] text-pretty text-lg ">
                        <p>
                            Si te vas a registrar como parte de una pareja o grupo familiar, asegúrate de que solo una persona del grupo o pareja realice el registro. Los demás integrantes
                            <strong className="text-emerald-800 text-xl"> no necesitan </strong>
                            registrarse de forma individual para evitar registros duplicados.
                        </p>
                    </article>
                </aside>
                <p className="flex flex-wrap px-4 items-center text-pretty text-gray-500">
                    Registra tu asistencia en el formulario ⬇️ o contáctanos por WhatsApp
                    <a
                        className="flex items-center gap-x-2 px-2 py-1 rounded-full ring-1 bg-emerald-700 ring-emerald-900 mx-2 hover:scale-105 transition-all duration-150"
                        href="https://wa.me/573113249582?text=Hola%20Monica"
                        target="blank_">
                        <WhatsApp />
                    </a>
                    si tienes dudas sobre la boda.
                </p>
                <section>
                    <p className="text-gray-500 text-2xl mb-6">Realizar registro como:</p>
                    <div className="flex w-full justify-center gap-x-6 md:gap-x-12 ">
                        <button
                            onClick={() => handleFormSwitch(0)}
                            type="button"
                            className={`registrationButton w-1/3 md:w-[15%] ${activeIndex === 0 && 'registrationButtonActive'}`}>
                            Individual
                        </button>
                        <button
                            onClick={() => handleFormSwitch(1)}
                            type="button"
                            className={`registrationButton w-1/3 md:w-[15%] ${activeIndex === 1 && 'registrationButtonActive'}`}>
                            Pareja
                        </button>
                        <button
                            onClick={() => handleFormSwitch(2)}
                            type="button"
                            className={`registrationButton w-1/3 md:w-[15%] ${activeIndex === 2 && 'registrationButtonActive'}`}>
                            Grupo
                        </button>
                    </div>
                </section>
                <main className="w-full overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 "
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        <div className="w-full flex-shrink-0">
                            <SingleForm />
                        </div>
                        <div className="w-full flex-shrink-0">
                            <CoupleForm />
                        </div>
                        <div className="w-full  flex-shrink-0">
                            <GroupForm />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}
