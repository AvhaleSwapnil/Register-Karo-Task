import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import TopBar from "./TopBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TopBar />
      <div className="h-[72px] bg-[#FFFFFF] border border-gray-300 flex items-center justify-between px-15">
        {/* Logo*/}
        <div>
          <img src={logo} alt="logo" width="200px" height="37px" />
        </div>

        {/* Desktop Menu*/}
        <div className="hidden lg:flex text-[#272D37] gap-5">
          <div className="flex gap-5 items-center">
            <a href="" className="hover:text-[#FFA229] transition">
              Home
            </a>
            <select name="" id="" className="hover:text-[#FFA229] transition">
              <option value="">Our Services</option>
            </select>
            <a href="" className="hover:text-[#FFA229] transition">
              Blog
            </a>
            <a href="" className="hover:text-[#FFA229] transition">
              Contact Us
            </a>
            <a href="" className="hover:text-[#FFA229] transition">
              About Us
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <CiSearch size={25} />
            <button className="text-[#FFFFFF] bg-[#FFA229] px-4 py-2 rounded-sm hover:bg-[#e69520] transition">
              Ask An Expert
            </button>
          </div>
        </div>

        {/* Mobile Menu Button  */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-5 lg:hidden">
            <a href="" className="hover:text-[#FFA229] transition">
              Home
            </a>
            <select name="" id="" className="hover:text-[#FFA229] transition">
              <option value="">Our Services</option>
            </select>
            <a href="" className="hover:text-[#FFA229] transition">
              Blog
            </a>
            <a href="" className="hover:text-[#FFA229] transition">
              Contact Us
            </a>
            <a href="" className="hover:text-[#FFA229] transition">
              About Us
            </a>
            <CiSearch size={25} />
            <button className="text-[#FFFFFF] bg-[#FFA229] px-4 py-2 rounded-sm hover:bg-[#e69520] transition">
              Ask An Expert
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
