import React, { useState ,useContext} from "react";
import { logo, logo2, lightMode, carretLight, carretDark, carretOrange, ai, vr, fairyTale, fairyTale2, teamWork, aiLight, vrLight, darkMode } from "../images/index";
import {StateContext} from "../context-store/ContextProvider"
import { Link } from "gatsby";
function Header() {
  const {darkmodeToggler, setDarkmodeToggler } = useContext(StateContext);
  console.log("darkmode ",darkmodeToggler)
  const [mobileToggle, setMobileToggle] = useState(false);
  const [servDropdownOpen, setServDropdownOpen] = useState(false);
  const [abtDropdownOpen, setAbtDropdownOpen] = useState(false);

  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <header
        className={`bg-white px-2 sm:px-4 py-2.5 dark:bg-[#281717] fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-[#281717]`}
      >
        <div className="lg:container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" href="#" className="flex overflow-hidden h-14 items-center">
            <img
              src={darkmodeToggler? logo2 : logo}
              className="h-24 mr-0  md:mr-3 mt-6 md:h-28"
              alt="for each labs logo"
            />
          </Link>
          <div className="flex md:order-2 items-center">
            <button type="button" className="h-5 w-5 md:h-6 md:w-6  mr-3 md:mr-6">
              <img
                src={darkmodeToggler? darkMode: lightMode}
                alt="Light Mode"
                onClick={() => setDarkmodeToggler(!darkmodeToggler)}
              />
            </button>
            <Link 
              type="button"
              className="text-white bg-[#F25544] hidden sm:block hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-[#F25544] font-medium rounded-lg text-sm px-3 py-1.5 md:px-5 md:py-2.5 text-center mr-1 md:mr-0 dark:text-white"
            >
              Contact Us
            </Link>
            <button
              data-collapse-toggle="#navbar-sticky"
              type="button"
              className="inline-flex items-center p-1 md:p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#f35544] dark:focus:ring-[#5f4747]"
              aria-controls="#navbar-sticky"
              aria-expanded="false"
              data-collapse="#navbar-sticky"
              onClick={() => setMobileToggle(!mobileToggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between transition ease-in-out duration-300 w-full md:flex md:w-auto md:order-1 ${mobileToggle ? "block" : "hidden"} `}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-[#261c1c] dark:md:bg-[#281717]">
              <li className="relative">
                <Link to="/services"
                  className="py-2 pl-3 pr-4 text-[#1E1E1E] rounded hover:text-[#F25544] md:p-0 dark:text-white dark:hover:text-[#F25544] flex items-center"
                  aria-current="page"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="#dropdownNavbar"
                  onClick={() => setServDropdownOpen(!servDropdownOpen)}
                >
                  Services
                  {/* <img className="w-2 h-1 ml-2 mt-1 hover:text-[#F25544]" src={darkmodeToggler? carretDark : carretLight}/> */}
                  <svg className="w-5 h-3 ml-1 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link >
                <div
                  id="dropdownNavbar"
                  className={`absolute z-10 ${servDropdownOpen? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-[#1E1E1E] dark:divide-gray-600 mt-2`}
                >
                  <ul
                    className="py-2 px-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : ai} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2 flex flex-col"
                      >Ai & Machine Learning
                      <span className="text-xs">The Future is here now.</span>
                      </a>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? vrLight : vr} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2 flex flex-col"
                      >Metaverse development
                        <span className="text-xs">Beyond the universe.</span>
                      </a>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : ai} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2 flex flex-col"
                      >Ai & Machine Learning
                      <span className="text-xs">The Future is here now.</span>
                      </a>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? vrLight : vr} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2 flex flex-col"
                      >Metaverse development
                      <span className="text-xs">Beyond the universe.</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/help"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#1E1E1E] rounded hover:text-[#F25544] md:p-0 dark:text-white dark:hover:text-[#F25544]"
                  aria-current="page"
                >
                  Who we help
                </Link>
              </li>
              <li>
                <Link
                  to="/casestudy"
                  className="block py-2 pl-3 pr-4 text-[#1E1E1E] rounded hover:text-[#F25544] md:p-0 dark:text-white dark:hover:text-[#F25544]"
                  aria-current="page"
                >
                  Case Study
                </Link>
              </li>
              <li className="relative">
                <button
                  className="py-2 pl-3 pr-4 text-[#1E1E1E] rounded hover:text-[#F25544] md:p-0 dark:text-white dark:hover:text-[#F25544] flex items-center"
                  aria-current="page"
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="#dropdownNavbar"
                  onClick={() => setAbtDropdownOpen(!abtDropdownOpen)}
                >
                  About Us
                  {/* <img className="w-2 h-1 ml-2 mt-1 hover:text-[#F25544]" src={darkmodeToggler? carretDark : carretLight}/> */}
                  <svg className="w-5 h-3 ml-1 mt-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`absolute z-10 ${abtDropdownOpen? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#1E1E1E] dark:divide-gray-600 mt-2`}
                >
                  <ul
                    className="py-2 px-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : fairyTale} className='w-5 h-5' />
                      <Link
                        to="/story"
                        className="px-2"
                      >Our Story</Link
                      >
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : teamWork} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2"
                      >Team</a
                      >
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : fairyTale2} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2"
                      >Jobs</a
                      >
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#f35544] dark:text-white dark:hover:text-white rounded-md">
                      <img src={darkmodeToggler? aiLight : teamWork} className='w-5 h-5' />
                      <a
                        href="#"
                        className="px-2"
                      >Clients</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#1E1E1E] rounded hover:text-[#F25544] md:p-0 dark:text-white dark:hover:text-[#F25544]"
                  aria-current="page"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
