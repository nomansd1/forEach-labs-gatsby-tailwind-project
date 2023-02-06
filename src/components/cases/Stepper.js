import React from 'react'
import { chart, gridTile1 } from '../../images'

function Stepper() {
    return (
        <div>
            <div className='py-20 w-[90%] mx-auto relative'>

                <ol class="relative border-l-4 border-[#f35544] border-dashed stepper">
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-4 h-4 bg-[#f35544] rounded-full -left-2.5 ring-4 ring-[#f35544]">
                        </span>
                        <button className='px-10 py-2.5 bg-[#f35544] text-white rounded-lg font-medium -mt-6'>The Problem</button>
                        <div className='gap-16 items-center sm:grid md:grid-cols-2'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <img src={gridTile1} className='w-[24rem] h-[16rem]' />
                        </div>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-4 h-4 bg-[#f35544] rounded-full -left-2.5 ring-4 ring-[#f35544]">
                        </span>
                        <button className='px-10 py-2.5 bg-[#f35544] text-white rounded-lg font-medium -mt-6'>The Problem</button>
                        <div className='gap-16 items-center sm:grid md:grid-cols-2'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <img src={gridTile1} className='w-[24rem] h-[16rem]' />
                        </div>
                    </li>
                    <li class="mb-10 ml-6">
                        <span class="absolute flex items-center justify-center w-4 h-4 bg-[#f35544] rounded-full -left-2.5 ring-4 ring-[#f35544]">
                        </span>
                        <button className='px-10 py-2.5 bg-[#f35544] text-white rounded-lg font-medium -mt-6'>The Problem</button>
                    </li>
                </ol>
                <div className='gap-16 items-center sm:grid md:grid-cols-2 ml-6 -mt-5'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <img src={chart} className='w-[24rem] h-[16rem]' />
                        </div>

            </div>
        </div>
    )
}

export default Stepper
