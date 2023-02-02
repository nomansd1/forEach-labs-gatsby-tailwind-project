import React from 'react'
import { rec } from '../../images'

function Contact() {
    return (
        <div>
            <section className="bg-white dark:bg-[#281717] ">
                <div className="gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className={`font-light text-[#281717] sm:text-lg`}>
                        <h2 className="mb-14 text-4xl tracking-tight font-bold text-[#281717] dark:text-white">Contact Us</h2>
                        <div className='flex flex-col'>
                            <div className='flex items-center'>
                                <input type="text" placeholder='Email' className='ring-4 ring-[#f35544] p-3 rounded-xl mx-2 pl-10 w-[70%]' />
                                <input type="text" placeholder='Name' className='ring-4 ring-[#f35544] p-3 rounded-xl mx-2 pl-10 w-[30%]' />
                            </div>
                            <textarea className='resize-none mt-10 ml-2 ring-4 ring-[#f35544] p-3 rounded-xl pl-10' placeholder='Message'></textarea>
                        </div>
                        <button
                            type="button"
                            className="text-white mt-14 bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:text-white"
                        >
                            Read More
                        </button>
                    </div>
                    <div className="grid gap-4 mt-14">
                        <h2 className="text-4xl tracking-tight font-bold text-[#281717] dark:text-white">What is lorem ipsum</h2>
                        <p className='text-[#989898] dark:text-[#C9C9C9] font-medium'>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                        <img className="w-full h-[200px] rounded-lg" src={rec} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact