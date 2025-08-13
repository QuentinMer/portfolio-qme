import { useState, useEffect } from 'react'

const Loading = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setIsExiting(true)
                    setTimeout(onComplete, 1400)
                    return 100
                }
                return prev + 2
            })
        }, 50)

        return () => clearInterval(timer)
    }, [onComplete])

    return (
        <div className={`fixed inset-0 bg-black z-[9999] overflow-hidden flex items-center justify-center transition-all duration-1200 ease-in-out ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className='bg-svg z-50 flex flex-col items-center justify-center absolute inset-0'>
             


                <img src="/img/logo-orange.svg" alt="logo" className="w-70 h-70 md:w-90 md:h-90 relative z-10 mb-12" />

                <p className='text-slate-100 text-4xl md:text-6xl font-family-decifer mb-8 tracking-widest mb-12'>
                    Quentin mercier
                </p>
                <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-500 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-slate-400 mt-4 font-family-geist">
                    {progress}%
                </div>
            </div>
        </div>

    )
}

export default Loading
