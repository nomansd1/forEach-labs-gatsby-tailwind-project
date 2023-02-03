import React, { useState } from 'react'
import { gridTile1, wra, wra2 } from '../../images';

function WorkGrid(props) {

    const [darkmodeToggler, setDarkmodeToggler] = useState(false);

    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <section className="bg-white dark:bg-[#281717] ">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className={`font-light text-[#281717] sm:text-lg ${props.order}`}>
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-[#281717] dark:text-white">What is lorem ipsum</h2>
                        <p className='text-[#989898] dark:text-[#C9C9C9] font-medium'>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                        <button
                            type="button"
                            className="text-white flex items-center mt-5 bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:text-white"
                        >
                            Read More
                            <img src={wra2} className='ml-3 w-6 h-auto' />
                        </button>
                    </div>
                    <div className="grid gap-4 mt-8">
                        <img className="w-full rounded-lg" src={gridTile1} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkGrid
