import { ActionButtons } from "../Post/ActionButtons";
import './FooterPost.css'

const FooterPost = ({ current, posts }) => {
    console.log(posts[current].description);


    return (
        <section className="bg-black mb-20 p-2 flex flex-col gap-x-4 w-full rounded-b-md">
            <ActionButtons />
            <section className="mt-2 text-pretty leading-5 px-1">
                <p className="text-white font-light">
                    <span className="text-white font-bold">Melissa&Pedro </span>
                    Gracias por acompañarnos en esta fecha especial para nosotros. Sin embargo les dejamos algunas recomendaciones a visitar que no pueden dejar pasar:
                </p>
            </section>
            <article>
                <br />
                        <div className="text-white">
                            <h3 className="font-semibold">
                                {posts[current].title}
                            </h3>

                            <p >
                                {posts[current].description}
                            </p>
                        </div>

            </article>
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
