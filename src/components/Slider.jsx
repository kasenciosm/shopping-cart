import React, { useState, useRef } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';


const featuredProducts = [
    "/imagen/retrosocks.jpeg",
    "/imagen/pack-socks.jpeg",
    "/imagen/family-socks.jpeg",
]

let count = 0

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef()


    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length
        setCurrentIndex(count)
    }
    const handleOnPrevCLick = () => {
        const productsLength = featuredProducts.length
        count = (currentIndex + productsLength - 1) % productsLength
        setCurrentIndex(count)
    }



    return (
        <div ref={slideRef} className='w-[75%] select-none relative shadow-xl transition ease-in-out'>
            <div className='aspect-w-14 aspect-h-8 ml-2 mr-1 transition' >
                <img src={featuredProducts[currentIndex]} alt='socks' />
            </div>

            <div className='absolute w-full top-1/2 trasnform -translate-y-1/2 py-2 px-3 -ml-0
            flex justify-between items-center'>
                <button
                    className='bg-slate-500 text-slate-200 p-2 rounded-full bg-opacity-20
                cursor-pointer hover:bg-opacity-80 transition'
                    onClick={handleOnPrevCLick}><BiLeftArrow /></button>
                <button
                    className='bg-slate-500 text-slate-200 p-2 rounded-full bg-opacity-20
                cursor-pointer hover:bg-opacity-80 transition'
                    onClick={handleOnNextClick}><BiRightArrow /></button>
            </div>
        </div >
    )
}

export default Slider