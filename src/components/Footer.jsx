import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaApple,
  FaArrowCircleUp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 bg-[#011B5B] py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white">
        <div className="lg:w-[247px] w-full">
          <p>
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <FaFacebook />
            <FaGoogle />
            <FaApple />
            <FaInstagram />
          </div>
        </div>

        <div>
          <p className="text-[#FFA229] font-bold">START A BUSINESS</p>
          <div className="flex flex-col space-y-2">
            <a href="">Features</a>
            <a href="">Solutions</a>
            <a href="">Integrations</a>
            <a href="">Enterprise</a>
          </div>
        </div>

        <div>
          <p className="text-[#FFA229] font-bold">GOVERNMENT REGISTRATION</p>
          <div className="flex flex-col space-y-2">
            <a href="">Partners</a>
            <a href="">Community</a>
            <a href="">Developers</a>
            <a href="">App</a>
            <a href="">Blog</a>
          </div>
        </div>

        <div>
          <p className="text-[#FFA229] font-bold">COMPLIANCE & TAX</p>
          <div className="flex flex-col space-y-2">
            <a href="">Channels</a>
            <a href="">Scale</a>
            <a href="">Watch the Demo</a>
            <a href="">Our Competition</a>
          </div>
        </div>

        <div>
          <p className="text-[#FFA229] font-bold">BIS & CDSCO</p>
          <div className="flex flex-col space-y-2">
            <a href="">About Us</a>
            <a href="">News</a>
            <a href="">Leadership</a>
            <a href="">Media Kit</a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="text-[#FFA229]">
          <FaArrowCircleUp size={40} />
        </button>
        <p className="text-[#AAB5CD] mt-4">
          © 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
