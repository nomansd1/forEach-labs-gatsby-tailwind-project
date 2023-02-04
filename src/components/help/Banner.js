import React, { useState } from 'react'
import { helpBanner, wra2 } from '../../images'

function Banner() {
  const [darkmodeToggler, setDarkmodeToggler] = useState(false);
  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <section class="bg-white dark:bg-[#281717] pt-16 md:pt-0">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 md:py-20 sm:py-20 xs:py-20">
          <div class="mr-auto place-self-center lg:col-span-7 md:col-span-6 sm:col-span-12">
            <h1 class="max-w-2xl mb-4 text-4xl dark:text-white font-bold tracking-tight leading-none md:text-5xl">Who we help? </h1>
            <p class="max-w-sm mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400">We help businesses and organizations achieve their goals.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:ring-[#F25544] dark:focus:ring-[#F25544]">
              Read More
              <img src={wra2} className='ml-3 w-6 h-auto' />
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex md:col-span-6 md:flex">
            <img src={helpBanner} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
