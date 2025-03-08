import React from "react";
import oracle from "../assets/oracle.png";
import morpheus from "../assets/morpheus.png";
import samsung from "../assets/samsung.png";
import monday from "../assets/monday.png";
import segment from "../assets/segment.png";

const HomeBottom = () => {
  return (
    <div className="h-auto mt-18 text-center px-5 md:px-10 lg:px-20 py-10">
      <p className="text-lg sm:text-xl lg:text-2xl text-[#272D37] font-semibold">
        Trusted By Over 100+ Startups and Freelance Businesses
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <img src={oracle} alt="Oracle" className="w-full max-w-[138px]" />
        <img src={morpheus} alt="Morpheus" className="w-full max-w-[138px]" />
        <img src={samsung} alt="Samsung" className="w-full max-w-[138px]" />
        <img src={monday} alt="Monday" className="w-full max-w-[138px]" />
        <img src={segment} alt="Segment" className="w-full max-w-[138px]" />
      </div>
    </div>
  );
};

export default HomeBottom;
