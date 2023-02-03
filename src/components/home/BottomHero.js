import React, { useState } from 'react'

function BottomHero() {
    const [darkmodeToggler, setDarkmodeToggler] = useState(false);
    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <div className='bottom_hero py-20 h-96 flex items-center justify-center bg-white dark:bg-[#281717] '>
                <div className='flex flex-col items-center text-white mt-20 justify-center'>
                    <h1 className='text-4xl font-bold'>VR Development</h1>
                    <p className='mt-2 font-medium text-center'>Dive into the digital world and feel the timeless experience.</p>
                    <button
                        type="button"
                        className="bg-white mt-5 text-[#F25544] hover:bg-[#C9C9C9] focus:ring-4 focus:outline-none focus:ring-[#C9C9C9] font-medium rounded-lg text-sm px-14 py-2.5 text-center mr-3 md:mr-0"
                    >
                        Discover More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomHero
