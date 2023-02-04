import React from 'react'
import { ora } from '../../images'

function Hero() {
    return (
        <div>
            <div className='story_banner mt-16  h-[60vh] items-center flex justify-center'>
                <div className='items-center flex flex-col justify-center text-white'>
                    <h1 className='text-4xl font-bold'>Our Story</h1>
                    <p className='mt-2 font-medium'>Dive into the digital world and feel the timeless experience.</p>
                    <button
                        type="button"
                        className="bg-white mt-5 flex items-center text-[#F25544] hover:bg-[#C9C9C9] focus:ring-4 focus:outline-none focus:ring-[#C9C9C9] font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-3 md:mr-0"
                    >
                        Contact Me
                        <img src={ora} className='ml-3 w-6 h-auto' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
