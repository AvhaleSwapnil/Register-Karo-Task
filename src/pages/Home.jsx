import React from "react";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa6";
import banner from "../assets/image.png";
import goal from "../assets/goal.png";
import box from "../assets/box.png";
import user from "../assets/user.png";
import hand from "../assets/hand.png";
import { FaPlayCircle } from "react-icons/fa";
import HomeBottom from "../components/HomeBottom";
const Home = () => {
  return (
    <div className="min-h-screen w-full relative">
      <main className="px-15 flex flex-wrap lg:flex-nowrap items-center lg:justify-between mt-8 lg:mt-16 gap-6 lg:gap-12 bg-gradient-to-b from-white via-[#F3F9FF] to-[#DFE9F4]">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <div className="flex justify-center lg:justify-start gap-2 items-center">
            <FaStar size={20} className="text-[#F2994A]" />
            <p className="text-base sm:text-lg lg:font-medium ">
              Google Rating
            </p>
            <div className="flex gap-1">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-5 h-5 bg-[#F2994A] flex items-center justify-center rounded-sm"
                  >
                    <FaStar className="text-white text-sm" />
                  </div>
                ))}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Your trusted partner <br className="hidden md:block" />
            for compliance business needs
          </h1>
          <hr width={"5%"} className="text-[#F2994A]" />
          <p className="max-w-sm sm:max-w-md md:max-w-lg text-sm sm:text-base text-gray-700 mx-auto lg:mx-0 text-center lg:text-left">
            An online business compliance platform that helps entrepreneurs and
            individuals with various
            <span className="text-[#4F4F4F] font-medium">
              {" "}
              registrations, tax filings,
            </span>
            and other
            <span className="text-[#4F4F4F] font-medium"> legal matters.</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="">
                  <img src={box} alt="" width={"19px"} />
                  <img src={box} alt="" width={"19px"} />
                </div>
                <div className="">
                  <img src={box} alt="" width={"19px"} />
                  <img src={box} alt="" width={"19px"} />
                </div>
              </div>
              <div>
                <h1 className="font-semibold">4.5+</h1>
                <p className="text-sm">Customer Rating</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={user} alt="user" width={"48px"} />
              <div>
                <h1 className="font-semibold">20,000+</h1>
                <p className="text-sm">Clients</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={hand} alt="hand" width={"48px"} />
              <div>
                <h1 className="font-semibold">99.8%</h1>
                <p className="text-sm">Financial Stability</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="bg-[#1C4670] text-[#FFFFFF] px-7 py-3">
              Talk An Export
            </button>
            <div className="flex gap-2">
              <FaPlayCircle size={23} className="text-[#FB432C]" />
              <p className="text-[#282828] font-medium">See how it works</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <img src={banner} alt="banner" className="mt-5 lg:mt-0" />
          <div className="absolute bottom-0 left-100">
            <img src={goal} alt="" />
          </div>
        </div>
      </main>
      <div className="hidden lg:inline absolute top-0 right-0">
        <div className="mb-5 shadow-md px-10 py-3 bg-[#FFFFFF]">
          <div>
            <span className="text-[#000000]">Annual Compliance</span>
          </div>
        </div>
        <div className="mb-5 shadow-md px-10 py-3 bg-[#FFFFFF]">
          <div>
            <span className="text-[#000000]">Payroll Services</span>
          </div>
        </div>
        <div className="mb-5 shadow-md px-10 py-3 bg-[#FFFFFF]">
          <div>
            <span className="text-[#000000]">Company Formation</span>
          </div>
        </div>
        <div className="mb-5 shadow-md px-10 py-3 bg-[#FFFFFF]">
          <div>
            <span className="text-[#000000]">Annual Compliance</span>
          </div>
        </div>
      </div>
      <HomeBottom />
    </div>
  );
};

export default Home;
