import React from 'react'
import Slider from 'react-slick';
import { view360 } from '../../images';

function WorkCase() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '30px',
        centerMode: true,
        responsive: [
            { breakpoint: 500, settings: { slidesToShow: 1 } },
            { breakpoint: 700, settings: { slidesToShow: 1 } },
            { breakpoint: 900, settings: { slidesToShow: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
        ],
        autoplay: true
    };
    return (
        <div>
            <div className='work_case py-16'>
                <h1 className='text-4xl font-bold text-center text-white'>Text</h1>
                <p class=" mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-sm mx-auto my-4 text-center max-w-md">We help businesses and organizations achieve their goals. help businesses and organizations achieve their goals help businesses and organizations achieve their goals help businesses and organizations achieve their goals</p>
                <div className='w-[100%] overflow-hidden mt-10 mx-auto '>
                    <Slider {...settings} className='w-[100%] wc_slider mx-auto'>
                        <div className='wc_slide max-w-[28rem]'>
                            <div class="p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={view360} alt="" />
                                </a>
                                <div class="p-5 text-center">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VR Development</h5>
                                    </a>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='wc_slide max-w-[28rem]'>
                            <div class="p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={view360} alt="" />
                                </a>
                                <div class="p-5 text-center">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VR Development</h5>
                                    </a>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='wc_slide max-w-[28rem]'>
                            <div class="p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={view360} alt="" />
                                </a>
                                <div class="p-5 text-center">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VR Development</h5>
                                    </a>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='wc_slide max-w-[28rem]'>
                            <div class="p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={view360} alt="" />
                                </a>
                                <div class="p-5 text-center">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VR Development</h5>
                                    </a>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='wc_slide max-w-[28rem]'>
                            <div class="p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src={view360} alt="" />
                                </a>
                                <div class="p-5 text-center">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">VR Development</h5>
                                    </a>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default WorkCase
