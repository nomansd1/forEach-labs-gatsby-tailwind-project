import React, { useContext} from 'react'
import Slider from 'react-slick';
import { company1l, company2l, view360 } from '../../images';
import {StateContext} from "../../context-store/ContextProvider"
function Help() {
    const {darkmodeToggler } = useContext(StateContext);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 500, settings: { slidesToShow: 2 } },
            { breakpoint: 700, settings: { slidesToShow: 4 } },
            { breakpoint: 900, settings: { slidesToShow: 6 } },
            { breakpoint: 1200, settings: { slidesToShow: 8 } },
        ],
        autoplay: true

    };
    return (
        <div className={`${darkmodeToggler && "dark"} mt-14`}>
            <div className='bg-[#f35544] relative text-center text-white px-5 py-10'>
                <h1 className='text-4xl font-bold'>Who we help?</h1>
                <p className='mt-2 font-medium md:w-[28rem] mx-auto'>Dive into the digital world and feel the timeless experience into the digital world and feel the timeless.</p>
                <div className='slider_bx'>
                    <Slider {...settings} className='slider my-10'>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                        <div className='slide'>
                            <img src={company1l} />
                        </div>
                        <div className='slide'>
                            <img src={company2l} />
                        </div>
                    </Slider>
                </div>
                <h1 className='text-4xl font-bold'>360 Virtual Showroom</h1>
                <p className='mt-2 font-medium md:w-[32rem] mx-auto'>Dive into the digital world and feel the timeless experience into the digital world and feel the timeless Dive into the digital world and feel the timeless experience into the digital.</p>
                <div class="flex relative items-center justify-center mt-12">
                    <a class="relative rounded-xl block w-[80%] md:w-[60%] md:h-[400px] bg-gray-900 group"
                        href="##">
                        <img class="absolute rounded-xl inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                            src={view360} />
                        <div class="relative p-5">
                            <div class="mt-40">
                                <div class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-0 ">
                                    <div class="p-2">
                                        <button
                                            type="button"
                                            className="text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544] font-medium rounded-lg text-sm px-3 py-1.5 md:px-5 md:py-2.5 text-center mr-1 md:mr-0 dark:text-white"
                                        >
                                            Try Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Help
