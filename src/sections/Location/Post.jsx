
import FooterPost from "./FooterPost";

import React from 'react'
import lajas from "../../../public/img/lajas.jpg";
import Tulcan from "../../../public/img/Tulcan.webp";
import HeaderPost from "./HeaderPost";

const Post = () => {
    const PostImages = [
        { src: '/img/lajas.jpg', alt: "Santuario Las Lajas" },
        { src: '/img/Tulcan.webp', alt: "Cementerio de Tulcan" },
    ];
  return (
    <section
    className="group flex flex-col items-start justify-start w-full md:w-1/2 lg:w-1/3 h-[600px] lg:h-[700px] overflow-hidden "
> 
    <HeaderPost client:visible />
    <div className="relative w-full h-96 overflow-hidden transition-all">
        <div
            className="carousel flex w-full h-full transition-transform duration-500"
        >
            {
                PostImages.map((image,index) => (
                    <div 
                    key={index}
                    className="carousel-item z-10 w-full h-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                            className="w-full object-cover grayscale-70 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all"
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))
            }
        </div>
    </div>
    <FooterPost client:visible/>
</section>
  )
}

export default Post




