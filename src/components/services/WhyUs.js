import React, { useState } from 'react'
import { whyTile } from '../../images';

function WhyUs() {
    const [darkmodeToggler, setDarkmodeToggler] = useState(false);
  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <div className='dark:bg-[#281717] dark:text-white py-14' >
      <h1 className='text-4xl font-bold text-center'>Who we help?</h1>
      <p className='max-w-sm mx-auto text-center mt-2 text-[#989898] dark:text-[#C9C9C9]'>lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum dolar lorem ipsum </p>
      <div className='flex items-center justify-center flex-wrap mt-16'>
        <div className='flex items-center justify-center flex-col w-[300px] m-4'>
            <img src={whyTile} className='w-[150px] h-[150px]'/>
            <div className='text-center p-3'>
            <h2 className='text-3xl font-bold'>Reliable</h2>
            <p className='font-medium mt-1 text-sm text-[#989898] dark:text-[#C9C9C9]'>lorem ipsum dolar emetipsum dolar emet ipsum dolar emetipsum dolar emet ipsum dolar emet</p>
            </div>
        </div>
        <div className='flex items-center justify-center flex-col w-[300px] mr-4'>
            <img src={whyTile} className='w-[150px] h-[150px]'/>
            <div className='text-center p-3'>
            <h2 className='text-3xl font-bold'>Fast</h2>
            <p className='font-medium mt-1 text-sm text-[#989898] dark:text-[#C9C9C9]'>lorem ipsum dolar emetipsum dolar emet ipsum dolar emetipsum dolar emet ipsum dolar emet</p>
            </div>
        </div>
        <div className='flex items-center justify-center flex-col w-[300px] mr-4'>
            <img src={whyTile} className='w-[150px] h-[150px]'/>
            <div className='text-center p-3'>
            <h2 className='text-3xl font-bold'>Professional</h2>
            <p className='font-medium mt-1 text-sm text-[#989898] dark:text-[#C9C9C9]'>lorem ipsum dolar emetipsum dolar emet ipsum dolar emetipsum dolar emet ipsum dolar emet</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyUs
