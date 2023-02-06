import React from 'react'
import { company2, company2l } from '../../images'

function Banner() {
  return (
    <div>
      <section className='case_study'>
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 md:py-20 sm:py-20 xs:py-20">
                    <div class="mr-auto place-self-center col-span-12 mt-10">
                        <img src={company2l}/>
                        <p class="max-w-2xl text-xl mb-6 font-semibold text-white mt-3 lg:mb-8 md:text-4xl lg:text-4xl">WORLD CHAMPIONSHIP-WINNING
EXHAUST SYSTEM TECHNOLOGY</p>
                        <div>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 rounded-[25px] bg-white">
                            Small Buisness: {'<100'}
                        </a>
                        <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 rounded-[25px] bg-white">
                            Exhaust Systems
                        </a>
                        </div>
                        <p className='text-xl mt-16 text-white'>Fone for them: <br/> VR Development, Web Development</p>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Banner
