import React, { useState } from "react";
import { footerLogo } from "../images";

function Footer() {
  const [darkmodeToggler, setDarkmodeToggler] = useState(false);
  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <footer className="py-12 bg-[#f35544] xl:pt-24 text-white">
        <div className="w-full px-4 mx-auto max-w-8xl">
          <div className="grid gap-12 xl:grid-cols-6 xl:gap-10">
            <div className="col-span-3">
              <a href="" className="flex">
                <img src={footerLogo} className="md:h-[100px] -mt-6 -ml-5" alt="" />
              </a>
              <p className="max-w-lg mb-3 font-medium">
                Foreach Labs is a library of interactive UI components built with
                Tailwind CSS that can get you started building websites faster
                and more efficiently.
              </p>
              <button
                type="button"
                className="bg-white md:mt-10 text-[#F25544] hover:bg-[] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-3 py-1.5 md:px-10 md:py-3.5 text-center mr-1 md:mr-0"
              >
                Contact Us
              </button>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold">Services</h3>
              <ul>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    AI and Machine Learning
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Web Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Metaverse Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Mobile Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    App Development
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Web Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="mb-6 text-lg font-bold">Follow us</h3>
              <ul>
              <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Clients
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="mb-6 text-lg font-bold">Legal Pages</h3>
              <ul>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                  Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                  Legal Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-6 border-white lg:mt-32 lg:mb-4" />
          <div className="flex items-center justify-between">
          <span className="block text-white font-medium">
            Foreach Labs © 2022 All Rights Reserved.
          </span>
          <div className="flex">
            <span className="w-6 h-6 dark:bg-[#281717] bg-white rounded-full mx-1"></span>
            <span className="w-6 h-6 dark:bg-[#281717] bg-white rounded-full mx-1"></span>
            <span className="w-6 h-6 dark:bg-[#281717] bg-white rounded-full mx-1"></span>

          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
