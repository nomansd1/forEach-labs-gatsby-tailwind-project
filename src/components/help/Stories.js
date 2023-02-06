import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { StateContext } from '../../context-store/ContextProvider';
import { rec, wra2 } from '../../images'

function Stories() {
    const {darkmodeToggler } = useContext(StateContext);
    return (
        <div className={`${darkmodeToggler && "dark"}`}>
            <div className='py-16 dark:bg-[#281717]'>
                <h1 className='text-4xl font-bold text-center dark:text-white'>Who we help?</h1>
                <div className='md:w-[80%] px-5 mx-auto my-10 sm:grid md:grid-col-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center'>
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
                <Link
                    to="/casestudypage"
                    className="text-white flex items-center mt-5 bg-[#F25544] hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544] font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 dark:text-white"
                >
                    See All Customer Cases
                    <img src={wra2} className='ml-3 w-6 h-auto' />
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Stories
