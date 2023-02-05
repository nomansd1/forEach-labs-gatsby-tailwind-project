import React, { useState ,useContext} from 'react'
import { ora } from '../../images';
import {StateContext} from "../../context-store/ContextProvider"
function Hero() {
   
    const {darkmodeToggler } = useContext(StateContext);
    return (
        <div className={`${darkmodeToggler && "dark"} mt-14`}>
            <div className='hero flex items-center justify-center'>
                <div className='text-white md:ml-80 p-5'>
                    <h1 className='text-4xl font-bold text-left'>VR Development</h1>
                    <p className='mt-2 font-medium text-left'>Dive into the digital world and feel the timeless experience.</p>
                    <button
                        type="button"
                        className="bg-white mt-5 flex items-center text-[#F25544] hover:bg-[#C9C9C9] focus:ring-4 focus:outline-none focus:ring-[#C9C9C9] font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-3 md:mr-0"
                    >
                        Discover More
                        <img src={ora} className='ml-3 w-6 h-auto' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
