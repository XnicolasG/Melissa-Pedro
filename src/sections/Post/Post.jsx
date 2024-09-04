
import { useId, useState } from "react";
import FooterPost from "../Location/FooterPost";
import HeaderPost from "../Location/HeaderPost";
import { Carousel } from "./Carousel";

const Post = () => {

    const [current, setCurrent] = useState(0)
    const PostImages = [
        { id: useId(), src: '/img/lajas.jpg', alt: "Santuario Las Lajas, Ipiales", title: 'Santuario de Las Lajas', description: '' },
        { id: useId(), src: '/img/Tulcan_cemetery.webp', alt: "Cementerio de Tulcan, Ecuador", title: 'Cementerio de Tulcan', description: '' },
        { id: useId(), src: '/img/laguna_cumbal.webp', alt: "Laguna de Cumbal, nariño", title: 'Laguna de Cumbal', description: '' },
        { id: useId(), src: '/img/el_charco.webp', alt: "Barrio El Charco, Ipiales", title: 'Barrio El Charco', description: '' }

    ];

    const incrementState = () => {
        if (current < PostImages.length - 1) {
            setCurrent(prevState => prevState + 1);
        }
    };

    const decrementState = () => {
        if (current > 0) {
            setCurrent(prevState => prevState - 1);
        }
    };

    return (
        <section
            className="group flex flex-col items-start justify-start w-full md:w-1/2 lg:w-1/3 h-[600px] lg:h-[700px]  "
        >
            <h2 className="mx-auto text-gray-700/80 text-2xl">¿Que hacer en Ipiales?</h2>

            <HeaderPost client:visible />
            <main className=" w-full h-96  transition-all border border-red-500">
                <div
                    className="flex w-full h-full border border-cyan-500"
                >
                    <Carousel
                        current={current}
                        incrementState={incrementState}
                        decrementState={decrementState}
                    >
                        {
                            PostImages.map((post) => (
                                <img
                                    key={post.id}
                                    className="w-full object-fit "
                                    src={post.src}
                                    alt={post.alt}
                                />
                            ))
                        }
                    </Carousel>
                </div>
            </main>
            <FooterPost client:visible />
        </section>

    )
}

export default Post




