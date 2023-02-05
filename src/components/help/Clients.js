import React, { useState,useContext } from 'react'
import { company1, company2 } from '../../images'
import {StateContext} from "../../context-store/ContextProvider"
function Clients() {
    const {darkmodeToggler } = useContext(StateContext);
  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <div className='py-16 dark:bg-[#281717]'>
        <h1 className='text-4xl font-bold text-center dark:text-white'>Who we help?</h1>
        <div className='flex flex-wrap justify-center items-center w-[70%] mx-auto'>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company2} className='w-[150px] h-[120px]' />
            </div>
            <div className='flex justify-center p-5 items-center mx-10 my-5'>
                <img src={company1} className='w-[70px] h-[70px]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
