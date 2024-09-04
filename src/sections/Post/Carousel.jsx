import { ChevronLeft } from "../../components/icons/Chevron-left"
import { ChevronRigth } from "../../components/icons/Chevron-rigth"


export const Carousel = ({ children, current, incrementState, decrementState }) => {

    const prev = (e) => {
        e.preventDefault()
        decrementState()
    }
    const next = (e) => {
        e.preventDefault()
        incrementState()
    }
    return (
        <section className="overflow-hidden relative">
            <div className="flex w-full transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {children}
            </div>
            <aside className="absolute inset-0 flex items-center w-full justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80">
                    <ChevronLeft stroke='#000' />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80">
                    <ChevronRigth stroke='#000' />
                </button>
            </aside>
            <section className="absolute w-full bottom-4">
                <div className="flex justify-center items-center gap-x-2">
                    {
                        children.map((_, i) => (
                            <aside 
                            key={i}
                            className={`transition-all w-1 h-1 rounded-full bg-white ${current === i ? 'p-1 bg-blue-500' : 'bg-opacity-80'}`}
                            
                            />
                        ))
                    }
                </div>
            </section>
        </section>
    )
}
