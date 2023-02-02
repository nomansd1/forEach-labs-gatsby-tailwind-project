import React, { useState } from 'react'
import { port1, port2, port3, port4, port5, port6 } from '../../images';

function Portfolio() {

    const [darkmodeToggler, setDarkmodeToggler] = useState(false);

    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <section className="overflow-hidden text-gray-700 dark:bg-[#281717]">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <h1 className='text-4xl font-bold text-center dark:text-white mb-10'>Portfolio</h1>
                    <div className="flex flex-wrap mb-10">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port2} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port4} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port5} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={port6} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center py-2 justify-center'>
                        <h1 className='text-4xl font-bold text-center dark:text-white'>Our Partners About Us</h1>
                        <p className='dark:text-white mt-3 w-[60%] font-medium text-center'>lorem ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
