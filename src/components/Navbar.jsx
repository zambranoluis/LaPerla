'use client'

import {useState} from 'react'

import Image from 'next/image';
import { TiThMenu } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";

import {
  handleClickMenu,
  handleClickClose
} from "./NavBarFuncs.js"



const Navbar = () => {
  const links = [
    { id: 0, label: "Inicio", path: "/" },
    { id: 1, label: "Historia", path: "/historia" },
    { id: 2, label: "Producción", path: "/produccion" },
    { id: 3, label: "Sostenibilidad", path: "/sontenibilidad" },
    // { id: 4, label: "Contacto", path: "/contacto" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="flex justify-between bg-[#193C34] h-[90px] md:px-[50px] select-none ">
      <div className="flex justify-center items-center w-[25%] md:w-[30%] md:hidden" >
        <TiThMenu id="menu" className="text-white text-4xl hover:cursor-pointer"  onClick={handleClickMenu}/>
        <ImCancelCircle id="close" className="text-white text-4xl hidden hover:cursor-pointer" onClick={handleClickClose} />
      </div>
      <div id="logo" className="flex justify-center items-center w-[50%]  md:w-[30%] ">
        <a href="/">
          <Image
            src="/LogoLaPerlaLong.png"
            alt="LaPerlaLogoNavbar"
            width={180}
            height={90}
          />
        </a>
      </div>
      <div id="sites" className=" hidden md:flex md:w-[50%] ">
        <ul className="flex w-full   justify-center items-center md:gap-4 lg:gap-8">
          {links.map((link) => (
            <li id={link.id} key={link.id} className="flex justify-center items-center">
              <a href={link.path} className="text-sm md:text-md lg:text-lg text-[#EDEFE1] font-bold ">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div id="contact" className="flex w-[25%] md:w-[20%] lg:justify-start  justify-center items-center  ">
        <button className="text-[#193C34]  font-bold text-sm md:text-lg bg-[#F2CA33] rounded-full px-2 md:px-4 py-1 md:py-1">Contacto</button>
      </div>
    </nav>
  );
};

export default Navbar;
