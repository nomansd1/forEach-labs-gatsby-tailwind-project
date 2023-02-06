import React, { useState,useContext } from 'react'
import { company1, company2, hero, wra, wra2 } from '../../images'
import Slider from 'react-slick';
import {StateContext} from "../../context-store/ContextProvider"

function Banner() {
    const {darkmodeToggler } = useContext(StateContext);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {breakpoint: 500, settings: {slidesToShow: 2}},
            {breakpoint: 700, settings: {slidesToShow: 4}},
            {breakpoint: 900, settings: {slidesToShow: 6}},
            {breakpoint: 1200, settings: {slidesToShow: 8}},
        ],
        autoplay: true

    };
    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <section class="bg-white dark:bg-[#281717]">
                <div class="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 md:py-20 sm:py-20 xs:py-20">
                    <div class="mr-auto place-self-center lg:col-span-7 md:col-span-6 sm:col-span-12">
                        <h1 class="max-w-2xl mb-4 text-4xl dark:text-white font-bold tracking-tight leading-none md:text-5xl">Hi, we are <br /> Foreach Labs </h1>
                        <p class="max-w-sm mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400">WE SAIL THE DIGITAL SEA AND CRAFT NEW DIGITAL
                            PRODUCTS ON STEROIDS.</p>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:ring-[#F25544] dark:focus:ring-[#F25544]">
                            Challenge Us
                            <img src={wra2} className='ml-3 w-6 h-auto' />
                        </a>
                    </div>
                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex md:col-span-6 md:flex">
                        <img src={hero} alt="mockup" />
                    </div>
                </div>
                <div className='slider_bx'>
                        <Slider {...settings} className='slider'>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                            <div className='slide'>
                                <img src={company1} />
                            </div>
                            <div className='slide'>
                                <img src={company2} />
                            </div>
                        </Slider>
                    </div>
            </section>
        </div>
    )
}

export default Banner
