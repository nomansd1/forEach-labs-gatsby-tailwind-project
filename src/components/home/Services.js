import React, { useState } from 'react'
import Slider from 'react-slick';
import { rec } from '../../images';


function Services() {

  const [darkmodeToggler, setDarkmodeToggler] = useState(false);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 855, settings: { slidesToShow: 1, } },
      { breakpoint: 900, settings: { slidesToShow: 2, } },
      { breakpoint: 1220, settings: { slidesToShow: 2, } },
    ],
    autoplay: true
  };
  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <div className='services_sec pt-10 pb-20'>
        <h1 className='text-4xl font-semibold text-center text-white'>Our Services</h1>
        <div className='w-[80%] mt-10 mx-auto flex items-center'>
          <Slider {...settings} className='w-[100%] px-10 flex items-center'>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='serv_slide'>
              <div className="max-w-xs  rounded-lg shadow dark:bg-[#281717] bg-white">
                <a href="#">
                  <img className="w-full rounded-t-lg" src={rec} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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

export default Services
