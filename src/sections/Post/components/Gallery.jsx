import React, { useId } from 'react'

export const Gallery = (current) => {
    const currentPost = current.current
    const photos = [
        {
            id: useId(),
            place: 'Santuario de Las Lajas ',
            images: ['/img/lajas2.webp', '/img/lajas3.webp', '/img/lajas4.webp']
        },
        {
            id: useId(),
            place: 'Cementerio de Tulcán',
            images: ['/img/tulcan2.webp', '/img/tulcan3.webp', '/img/tulcan4.webp']
        },
        {
            id: useId(),
            place: 'lajas',
            images: ['/img/cumbal2.webp', '/img/cumbal3.webp', '/img/cumbal4.webp']
        },
        {
            id: useId(),
            place: 'lajas',
            images: ['/img/charco2.webp', '/img/charco3.webp', '/img/charco4.webp']
        },

    ]

    return (
        <section className='justify-center w-1/2 hidden md:flex px-4'>
            <div className='grid grid-cols-2 w-[80%] h-[720px] rounded-lg overflow-hidden'>
                {
                    photos[currentPost].images.map((img, index) => (
                        < React.Fragment key={index}>
                            {
                                index === 0 ? (

                                    < div className='col-span-2 row-span-1' > 
                                    <img 
                                    className='w-full h-full object-cover'
                                    src={img} alt={index} />
                                    </div>
                                )
                                :
                                (
                                    < div className='col-span-1 row-span-1' > 
                                    <img 
                                    className='w-full h-full object-cover'
                                    src={img} alt="" />
                                    </div>

                                )
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </section >
    )
}
