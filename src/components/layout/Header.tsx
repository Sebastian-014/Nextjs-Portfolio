
'use client';

import Link from "next/link"
import Wrapper from "../shared/Wrapper"
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Wrapper>
        <header className="pt-8 py-2 fixed top-0 left-0 w-full bg-neutral-800 z-10">

          <div className="flex justify-between mx-6 md:mx-10">
            <div>
              <h2 className=" text-3xl md:text-4xl font-bold text-gray-200">Portfolio.</h2>
            </div>

            {/* Navbar Links */}

            <div>
              <ul className=" hidden md:flex md:space-x-16 lg:space-x-24 md:font-semibold">
                <Link href="/"><li className=" text-gray-200 hover:underline hover:text-purple-500 duration-500">Home</li></ Link>
                <Link href="/about"><li className=" text-gray-200 hover:underline hover:text-purple-500 duration-500">About</li></ Link>
                <Link href="/skills"><li className=" text-gray-200 hover:underline hover:text-purple-500 duration-500">Skills</li></ Link>
                <Link href="/contact"><li className=" text-gray-200 hover:underline hover:text-purple-500 duration-500">Contact</li></ Link>
              </ul>

              {/* Mobile Nav Hamburger */}

              <div onClick={handleNav} className="md:hidden">
                <AiOutlineMenu color="white" size="20" className="mr-4" />

              </div>
            </div>
          </div>

          {/* Navbar for Mobile */}

          <div className={` ${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`} >
            <div className={`${nav ? "fixed left-0 top-0 rounded-ms w-[75%] sm:w-[60%] md:w-[45%] h-[60%] bg-gray-200 p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}`}>

              <div className="flex w-full">

                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>

              {/* Mobile Navbar Links */}

              <div className="py-4 pt-14 flex flex-col">

                <ul className="text-sm font-semibold">
                  <Link href="/"><li className="pb-8">HOME</li></Link>
                  <Link href="/about"><li className="pb-8">ABOUT</li></Link>
                  <Link href="/skills"><li className="pb-8">SKILLS</li></Link>
                  <Link href="/contact"><li className="pb-8">CONTACT</li></Link>
                </ul>
              </div>
            </div>
          </div>

        </header>
      </Wrapper>
    </>
  )
}

export default Header