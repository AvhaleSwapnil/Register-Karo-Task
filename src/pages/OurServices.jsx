import React from "react";
import formation from "../assets/ourservices/formation.png";
import computerSearch from "../assets/ourservices/computersearch.png";
import onlineAddress from "../assets/ourservices/onlineAddress.png";
import cube from "../assets/ourservices/cube.png";
import shop from "../assets/ourservices/shop.png";
import book from "../assets/ourservices/book.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className="px-5 md:px-10 lg:px-30 pt-20">
      {/* Header */}
      <div className="text-center">
        <p className="text-[#EB8D15] tracking-wide text-sm md:text-base">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">Explore Our Services</h1>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={formation} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Company Formation
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Build web-based solutions that enhance customer experience.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={computerSearch} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Company Secretarial Services
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={onlineAddress} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Virtual Office Address
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Foster customer relationships by effectively serving your market.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={cube} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Annual Compliance Services
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Turn your ideas into modern products with our design experts.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={shop} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Payroll Services
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Expand your business across the globe with minimal effort.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
        <div className="w-full sm:w-80 h-80 flex flex-col items-center justify-center text-center gap-4 p-5 bg-white shadow-lg rounded-lg">
          <img src={book} alt="Company Formation" width={60} />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">
              Bookkeeping Services
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Steering user behaviours with creative design, data insights &
              technology.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#EB8D15] font-medium cursor-pointer">
            <span>Learn more</span>
            <FaRegArrowAltCircleRight size={18} />
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <button className="text-[#FFFFFF] px-5 py-3 bg-[#1C4670] rounded-sm">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
