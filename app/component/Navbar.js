"use client"
import React from 'react'
import Image from "next/image";
import { VscChromeClose } from "react-icons/Vsc";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Link from 'next/link'


const navlist = [
  {name:"Home", link:"/"},
  {name:"Gallary", link:"/gallery"},
  {name:"Chatbot", link:"/chatbot"},
  {name:"Generate Image", link:"/createpost"}
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black py-3">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Image src="next.svg" alt="navImage" width={100} height={100} />
          </div>
          <div className={`md:static md:min-h-fit absolute bg-black py-5 min-h-[35vh] left-0 ${open ? `top-[8%]`: `top-[-100%]`} md:w-auto w-full  flex items-center px-5 md:z-[0] z-[2] transition-all duration-500 ease-linear`}>
            <ul className="flex md:flex-row flex-col mx-auto items-center md:gap-[4vw] gap-8">
            {navlist.map((lst, ind) => {
             return <li key={ind}>
                <Link className=" text-white hover:bar text-lg" href={lst.link}>
                  {lst.name}
                </Link>
              </li>
            })}
              
             
            </ul>
          </div>
          {open ? (
            <VscChromeClose
              onClick={() => setOpen(false)}
              className="text-3xl text-white cursor-pointer md:hidden"
            ></VscChromeClose>
          ) : (
            <FiMenu
              onClick={() => setOpen(true)}
              className="text-3xl text-white cursor-pointer md:hidden"
            ></FiMenu>
          )}
        </nav>
      </header>
  )
}

export default Navbar