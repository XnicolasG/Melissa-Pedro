
import { useId, useState } from "react";
import FooterPost from "../Location/FooterPost";
import HeaderPost from "../Location/HeaderPost";
import { Carousel } from "./Carousel";

const Post = () => {

    const [current, setCurrent] = useState(0)
    const PostImages = [
        { 
            id: useId(), 
            src: '/img/lajas.jpg', 
            alt: "Santuario Las Lajas, Ipiales", 
            title: 'Santuario de Las Lajas ⛪', 
            description: '¡Un lugar impresionante! El Santuario de Las Lajas es una joya arquitectónica enclavada en un cañón. Ven a maravillarte con su belleza y disfruta de un paseo por el entorno natural. Ideal para fotos y momentos de paz.' 
        },
        { 
            id: useId(), 
            src: '/img/Tulcan_cemetery.webp', 
            alt: "Cementerio de Tulcan, Ecuador ", 
            title: 'Cementerio de Tulcan 🌲', 
            description: '¡No es un cementerio cualquiera! El Cementerio de Tulcan destaca por sus esculturas de cipreses tallados en formas sorprendentes. Un lugar único que combina arte y tradición, perfecto para una caminata reflexiva.' 
        },
        { 
            id: useId(), 
            src: '/img/laguna_cumbal.webp', 
            alt: "Laguna de Cumbal, Nariño", 
            title: 'Laguna de Cumbal 🏞️', 
            description: '¡Un rincón mágico en medio de la naturaleza! La Laguna de Cumbal es el lugar perfecto para desconectar del bullicio. Disfruta de sus paisajes, haz senderismo y respira aire puro en este paraíso escondido.' 
        },
        { 
            id: useId(), 
            src: '/img/el_charco.webp', 
            alt: "Barrio El Charco, Ipiales", 
            title: 'Barrio El Charco 🏠', 
            description: '¡Explora la esencia local de Ipiales! El Barrio El Charco es conocido por su ambiente auténtico y su cultura vibrante. Recorre sus calles, prueba la comida típica y sumérgete en la vida cotidiana de la región.' 
        }
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
            className="group flex flex-col items-start justify-start w-full md:w-1/2 lg:w-1/4 h-[600px] lg:h-[700px]  "
        >
            <h2 className="mx-auto text-gray-700/80 text-2xl">¿Que hacer en Ipiales?</h2>

            <HeaderPost client:visible />
            <main className=" w-full h-96  transition-all ">
                <div
                    className="flex w-full h-full "
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
            <FooterPost current={current} posts={PostImages} client:visible />
        </section>

    )
}

export default Post




