import { useState } from "react";
import Comment from "../../components/icons/Comment";
import Like from "../../components/icons/Like";
import Send from "../../components/icons/Send";
import './FooterPost.css'

const FooterPost = () => {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <section className="bg-black mb-20 p-2 flex flex-col gap-x-4 w-full rounded-b-md">
            <div className="flex gap-x-2 items-center">
                <Like
                    stroke={like? '#ef4444' :  "white"}
                    fill={like ? '#ef4444' : 'transparent'}
                    id="like"
                    className={`size-6 ${like ? 'like' : ''}`}
                    onClick={toggleLike} />
                <Comment stroke="white" className="size-6 transform scale-x-[-1]" />
                <a 
                target="blank_"
                href="https://api.whatsapp.com/send?text=Save%20The%20Date%2007/12/24:%20https://melissa-pedro.vercel.app/">
                <Send stroke="white" className="size-6" />
                </a>
            </div>
            <section className="mt-2 text-pretty leading-5 px-1">
                <p className="text-white font-light">
                    <span className="text-white font-bold">Melissa&Pedro</span>
                    Gracias por acompañarnos en esta fecha especial para nosotros. Sin embargo les dejamos algunas recomendaciones a visitar que no pueden dejar pasar:
                </p>
            </section>
            <article></article>
        </section>
    );
};

export default FooterPost;
// ---
// import Comment from "../../components/icons/Comment";
// import Send from "../../components/icons/Send";
// import Like from "../../components/icons/Like";
// ---

// <section class="bg-black mb-20 p-2 flex flex-col gap-x-4 w-full rounded-b-md">
//     <div class="flex gap-x-2 items-center">
//         <Like id="like" stroke="white" fill="transparent" class="size-6" />
//         <Comment stroke="white" class="size-6 transform scale-x-[-1]" />
//         <a
//             href="whatsapp://send?text=Visita%20este%20enlace:%20https%3A%2F%2Fmelissa-pedro.vercel.app/"
//             target="_blank"
//         >
//             <Send stroke="white" class="size-6" />
//         </a>
//     </div>
//     <section class="mt-2 text-pretty leading-5 px-1">
//         <p class="text-white font-light">
//             <span class="text-white font-bold">Melissa&Pedro</span>
//             Gracias por
//             acompañarnos en esta fecha especial para nosotros. Sin embargo les dejamos algunas recomendaciones a visitar que no pueden dejar pasar:
//         </p>
//     </section>

//     <article></article>
// </section>

// <style>
//     .like {
//         animation: likeScale 0.25s ease-in-out;
//     }
//     @keyframes likeScale {
//         0%,
//         100% {
//             transform: scale(1);
//         }
//         50% {
//             transform: scale(1.3);
//         }
//     }
// </style>

// <script>
//     const likeIcon = document.getElementById("like");
//     const likePath = likeIcon?.querySelector("path");

//     likeIcon?.addEventListener("click", () => {
//         const currentFill = likePath?.getAttribute("fill");

//         if (currentFill === "transparent") {
//             likePath?.setAttribute("fill", "#ef4444");
//             likePath?.setAttribute("stroke", "#ef4444");
//             likeIcon?.classList.add("like");
//         } else {
//             likePath?.setAttribute("fill", "transparent");
//             likePath?.setAttribute("stroke", "white");
//             likeIcon?.classList.remove("like");
//         }
//     });
// </script>
