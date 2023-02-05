import React, { useState,useContext } from 'react'
import Slider from 'react-slick';
import { port1, port2, port3, port4, port5, port6 } from '../../images';
import {StateContext} from "../../context-store/ContextProvider"
function Portfolio() {
    const {darkmodeToggler } = useContext(StateContext);
   
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 655, settings: { slidesToShow: 2, } },
            { breakpoint: 900, settings: { slidesToShow: 3, } },
            { breakpoint: 1220, settings: { slidesToShow: 3, } },
        ],
        autoplay: true
    };
    const settings2 = {
        rtl: true
    }
    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <section className="overflow-hidden text-gray-700 dark:bg-[#281717]">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <h1 className='text-4xl font-bold text-center dark:text-white mb-10'>Portfolio</h1>
                    <div className='slider flex-col port_slider w-[100%]'>
                        <Slider {...settings} className='w-[100%] flex items-center'>
                            <div className='port_slide w-44 h-44'>
                                <img src={port1} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port2} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port3} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port4} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port5} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port6} />
                            </div>
                        </Slider>
                        <Slider {...settings} {...settings2} className='w-[100%] -mt-32 flex items-center'>
                            <div className='port_slide w-44 h-44'>
                                <img src={port1} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port2} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port3} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port4} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port5} />
                            </div>
                            <div className='port_slide w-44 h-44'>
                                <img src={port6} />
                            </div>
                        </Slider>
                    </div>
                    <div className='flex flex-col items-center py-2 justify-center'>
                        <h1 className='text-4xl font-bold text-center dark:text-white'>Our Partners About Us</h1>
                        <p className='dark:text-white mt-3 w-[90%] md:w-[60%] font-medium text-center'>lorem ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit ipsum dolor imit</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
