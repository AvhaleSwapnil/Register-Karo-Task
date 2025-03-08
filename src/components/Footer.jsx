import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-20 bg-[#011B5B] h-[504px] pt-20">
      <div>
        <div className="flex justify-between">
          <div className="text-[#FFFFFF] lg:w-[247px] w-full">
            <p>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[#FFFFFF]">
              <FaFacebook />
              <FaGoogle />
              <FaApple />
              <FaInstagram />
            </div>
          </div>
          <div>
            <p className="text-[#FFA229] font-bold">START A BUSINESS</p>
            <div className="flex flex-col text-[#FFFFFF]">
              <a href="">Features</a>
              <a href="">Solutions</a>
              <a href="">Integrations</a>
              <a href="">Enterpise</a>
              <a href="">Solutions</a>
            </div>
          </div>
          <div>
            <p className="text-[#FFA229] font-bold">GOVERNMENT REGISTRATION</p>
            <div className="flex flex-col text-[#FFFFFF]">
              <a href="">Partners</a>
              <a href="">Community</a>
              <a href="">Developers</a>
              <a href="">App</a>
              <a href="">Blog</a>
            </div>
          </div>
          <div>
            <p className="text-[#FFA229] font-bold">COMPLIANCE & TAX</p>
            <div className="flex flex-col text-[#FFFFFF]">
              <a href="">Chnnels</a>
              <a href="">Scale</a>
              <a href="">Watch the Demo</a>
              <a href="">Our Competition</a>
            </div>
          </div>
          <div>
            <p className="text-[#FFA229] font-bold">BIS & CDSCO</p>
            <div className="flex flex-col text-[#ffffff]">
              <a href="">About Us</a>
              <a href="">News</a>
              <a href="">Leadership</a>
              <a href="">Media Kit</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-30">
          <button className="text-[#FFA229]">
            <FaArrowCircleUp size={40} />
          </button>
          <p className="text-[#AAB5CD] mt-4">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
