import React from 'react'
import { rec } from '../../images';

function CaseStudy() {
    const [tabShow, setTabShow] = React.useState(true)
    const [tabNo, setTabNo] = React.useState(1)
    return (
        <div>
            <div className='dark:bg-[#281717] mt-16 px-16 py-16'>
                <h1 className='text-4xl dark:text-white font-bold '>Case Study's</h1>
                <hr className="mt-10 border-1 border-[#f35544]" />
                <div className='mt-6'>
                    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li class="mr-2">
                            <button class="inline-block px-4 py-2.5 text-[#f35544] hover:text-white bg-transparent hover:bg-[#f35544] rounded-[35px] border-2 border-[#f35544] active:bg-[#f35544] focus:bg-[#f35544] focus:text-white" aria-current="page" id="profile-tab" data-tabs-target="#profile" type="button" onClick={(e) => {
                                e.preventDefault();
                                setTabShow(!tabShow)
                                setTabNo(1)
                            }}>AI Development</button>
                        </li>
                        <li class="mr-2">
                            <button class="inline-block px-4 py-2.5 text-[#f35544] hover:text-white bg-transparent hover:bg-[#f35544] rounded-[35px] border-2 border-[#f35544] active:bg-[#f35544] focus:bg-[#f35544] focus:text-white" aria-current="page" id="profile-tab" data-tabs-target="#profile" type="button" onClick={(e) => {
                                e.preventDefault();
                                setTabShow(!tabShow)
                                setTabNo(2)
                            }}>AI Development</button>
                        </li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <div className={`${tabNo === 1 && tabShow ? `block` : `hidden`}`}>
                        <div className={`bg-transparent dark:bg-[#281717] md:w-[100%] mx-auto my-10 sm:grid md:grid-col-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center`}>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                        <nav aria-label="Page navigation mx-auto example">
                            <ul class="inline-flex items-center -space-x-px">
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">3</a>
                                </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className={`${tabNo === 2 && tabShow ? `block` : `hidden`}`}>
                        <div className={`bg-transparent dark:bg-[#281717] md:w-[100%] mx-auto my-10 sm:grid md:grid-col-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center`}>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="max-w-xs rounded-lg shadow dark:bg-[#281717] bg-white m-3">
                                <a href="#">
                                    <img className="max-h-40 w-full rounded-t-lg" src={rec} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Custom Tailwind Development</h5>
                                    </a>
                                    <p className='text-sm text-[#717171] dark:text-[#C9C9C9]'>It is a long established fact that a reader will be distracted</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#F25544] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#F25544]">
                                        Read more
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                        <nav aria-label="Page navigation mx-auto example">
                            <ul class="inline-flex items-center -space-x-px">
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" class="rounded-md mx-2 px-3.5 py-2 leading-tight text-[#f35544] bg-white border border-[#f35544] hover:bg-[#f35544] hover:text-white">3</a>
                                </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy
