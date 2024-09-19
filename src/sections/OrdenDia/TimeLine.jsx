import { MobileView } from "./MobileView"
import './styles/TimeLine.css'


export const TimeLine = () => {

  const breakpoints = [
    {
      title: 'Llegada',
      Time: '3:30 PM',
      icon: '🚗'
    },
    {
      title: 'Ceremonia',
      Time: '4:00 PM',
      icon: '⛪'
    }, {
      title: 'Coctel',
      Time: '6:00 PM',
      icon: '🥂'
    }, {
      title: 'Recepción',
      Time: '7:00 PM',
      icon: '🎉'
    }, {
      title: 'Cena',
      Time: '7:30 PM',
      icon: '🍽️'
    }, {
      title: 'Baile',
      Time: '8:00 PM',
      icon: '💃🏻'
    }, {
      title: 'Fiestaaa',
      Time: '9:00 PM',
      icon: '🥳'
    },
  ]

  return (
    <div className='w-full mt-8 flex flex-col justify-center items-center'>
      <div className="relative  mx-auto ">
        <h2 className="text-5xl md:text-7xl text-center text-emerald-800/20">
          Orden del día
        </h2>
        <h2 className='text-xl md:text-3xl text-center font-Halimun font-semibold absolute top-3 md:top-5 left-[16%] ' >Orden del día</h2>
      </div>
      <section className='my-12 hidden md:block'>

        <ol class="items-center sm:flex">
          {
            breakpoints.map((item, index) => (

              <li key={index} class="relative w-20 md:w-28 lg:w-36 mb-6 sm:mb-0 flex-1 ">
                <div class="flex items-center ">
                  <div class={`bounce bounce-${index + 1} z-10 flex items-center justify-center size-10 bg-emerald-100 rounded-full ring-0 ring-white dark:bg-emerald-[#96A480] sm:ring-8 dark:ring-emerald-900 shrink-0`}>
                    <p className='text-xl'>{item.icon}</p>
                  </div>
                  {
                    index !== 6
                      ? <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                      : ''
                  }
                </div>
                <div class="mt-3 sm:pe-8 text-start flex flex-col justify-start">
                  <h3 class="timeTitle">{item.title}</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.Time}</time>
                </div>
              </li>

            ))
          }

        </ol>

      </section>
      <section className='block md:hidden'>
        <MobileView client:visible />
      </section>
    </div>
  )
}
