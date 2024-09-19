import './styles/MobileView.css'

export const MobileView = () => {
  const breakpoints = [
    {
      number: 1,
      title: 'Llegada',
      Time: '3:30 PM',
      icon: '🚗'
    },
    {
      number: 2,
      title: 'Ceremonia',
      Time: '4:00 PM',
      icon: '⛪'
    }, {
      number: 3,
      title: 'Coctel',
      Time: '6:00 PM',
      icon: '🥂'
    }, {
      number: 4,
      title: 'Recepción',
      Time: '7:00 PM',
      icon: '🎉'
    }, {
      number: 5,
      title: 'Cena',
      Time: '7:30 PM',
      icon: '🍽️'
    }, {
      number: 6,
      title: 'Baile',
      Time: '8:00 PM',
      icon: '💃🏻🕺🏻'
    }, {
      number: 7,
      title: 'Fiestaaa',
      Time: '9:00 PM',
      icon: '🥳'
    },
  ]
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      {breakpoints.map((item) => (
        <>
          {
            item.number !== 7 
            ?
              <div className="flex border rounded-lg p-4 sm:w-52 bg-white shadow-md">
                <div className={`bouncer bouncer-${item.number} flex flex-col items-center justify-center  text-emerald-700 font-bold text-5xl`}>
                  {item.number}
                  <span className={`icon icon-${item.number} text-2xl`}>
                    {item.icon}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <time className="text-gray-500">{item.Time}</time>
                </div>
              </div>
              :
              <div className="party relative flex border rounded-lg p-4 col-span-2 sm:w-52  shadow-md">
                <div className={`bouncer bouncer-${item.number} flex flex-col items-center justify-center  text-emerald-700 font-bold text-5xl`}>
                  {item.number}
                  <span className={`icon icon-${item.number} text-2xl`}>
                    {item.icon}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <time className="text-gray-500">{item.Time}</time>
                  <div className='disco size-12 absolute right-6'>
                    <img 
                    className='w-full object-cover'
                    src="/img/disco.webp" alt="bola de disco" />
                  </div>
                </div>
              </div>
          }
        </>
      ))}
    </section>
  )
}
