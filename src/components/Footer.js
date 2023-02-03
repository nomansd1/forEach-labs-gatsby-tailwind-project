import React, { useContext, useState } from "react";
import UserContext from "../context/context";
import { footerLogo } from "../images";

function Footer() {
  const [darkmodeToggler, setDarkmodeToggler] = useContext(UserContext);

  return (
    <div className={`${darkmodeToggler && "dark"}`}>
      <footer className="py-12 bg-[#f35544] xl:pt-24 text-white">
        <div className="w-full px-4 mx-auto max-w-8xl">
          <div className="grid gap-12 xl:grid-cols-6 xl:gap-24">
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
              <h3 className="mb-6 text-lg font-bold">Help and support</h3>
              <ul>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Contact us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Github discussions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold">Follow us</h3>
              <ul>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Github
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    rel="noreferrer nofollow"
                    className="font-normal hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-lg font-bold">Legal</h3>
              <ul>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    License (EULA)
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" className="font-normal hover:underline">
                    Brand guideline
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
