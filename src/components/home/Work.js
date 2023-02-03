import React, { useState } from 'react'
import WorkGrid from './WorkGrid';

function Work() {

  const [darkmodeToggler, setDarkmodeToggler] = useState(false);


  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <div className='w-full py-10 px-5 sm:px-20 dark:bg-[#281717]'> 
        <div className='w-[70%] flex flex-wrap items-center justify-between m-auto number_sec'>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-5xl font-extrabold dark:text-white'>
                    40<span className='text-[#f35544]'>+</span>
                </span>
                <span className='text-lg font-semibold text-[#989898] dark:text-[#C9C9C9] '>Lorem Ipsum</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-5xl font-extrabold dark:text-white'>
                    300<span className='text-[#f35544]'>+</span>
                </span>
                <span className='text-lg font-semibold text-[#989898] dark:text-[#C9C9C9] '>Lorem Ipsum</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-5xl font-extrabold dark:text-white'>
                    32<span className='text-[#f35544]'>+</span>
                </span>
                <span className='text-lg font-semibold text-[#989898] dark:text-[#C9C9C9] '>Lorem Ipsum</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <span className='text-5xl font-extrabold dark:text-white'>
                    10<span className='text-[#f35544]'>+</span>
                </span>
                <span className='text-lg font-semibold text-[#989898] dark:text-[#C9C9C9] '>Lorem Ipsum</span>
            </div>
        </div>
        <WorkGrid 
            order="order-last"
        />
        <WorkGrid 
            order="order-first"
        />
      </div>
    </div>
  )
}

export default Work
