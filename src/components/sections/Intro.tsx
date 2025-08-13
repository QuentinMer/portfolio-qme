
import { useState } from 'react'

const Intro = () => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div className="m-3 xl:m-4 flex flex-col md:flex-row justify-between items-center md:gap-x-36 px-10 pb-5">


            <img src="/img/designer.svg" alt="photo profil" className="w-100 md:w-150 md:h-120 pt-12 md:pt-0" />

            <div className="flex flex-col gap-10 md:justify-end items-center justify-center md:items-end">
                <div className="flex flex-col gap-10 items-center md:items-end xl:mx-12 xl:ps-36">
                    <p className="text-xl md:text-2xl text-slate-100 text-center md:text-end font-family-geist pt-24 flex tracking-wide">
                        Between lines of code and lines of ink,
                        I craft interfaces that hit span hard. Inspired by tech, urban culture, and raw design,
                        I blend front-end and UX/UI to create visual experiences that are minimal,
                        bold, and uncompromising.
                    </p>

                    <img 
                        src={isHovered ? "/img/cta-hover.svg" : "/img/cta.svg"} 
                        alt="signature" 
                        className="w-50 md:w-50 xl:w-80 cursor-pointer hover:scale-105 transition-transform duration-200" 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsHovered(false)}
                    />
                </div>
            </div>

        </div>
    )
}

export default Intro
