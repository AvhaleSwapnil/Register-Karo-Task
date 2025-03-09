import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="h-[44px] bg-[#1C4670] text-white flex items-center justify-end gap-5 px-4 md:px-10 lg:px-20 text-sm">
      <div className="hidden md:flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <MdOutlineEmail />
          <span className="hidden sm:inline">www.registerkaro.in</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <span className="hidden sm:inline">+918447746183</span>
        </div>
      </div>
      <div className="flex items-center gap-3 text-lg">
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
};

export default TopBar;
