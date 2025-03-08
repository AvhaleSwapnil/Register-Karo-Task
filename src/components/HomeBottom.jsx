import React from "react";
import oracle from "../assets/oracle.png";
import morpheus from "../assets/morpheus.png";
import samsung from "../assets/samsung.png";
import monday from "../assets/monday.png";
import segment from "../assets/segment.png";
const HomeBottom = () => {
  return (
    <div className="h-[164px] mt-18 text-center px-20">
      <p className="text-xl lg:text-2xl text-[#272D37]">
        Trusted By Over 100+ Startups and freelance business
      </p>
      <div className="mt-10 flex items-center justify-around">
        <div>
          <img src={oracle} alt="" width={"138px"} />
        </div>
        <div>
          <img src={morpheus} alt="" width={"138px"} />
        </div>
        <div>
          <img src={morpheus} alt="" width={"138px"} />
        </div>
        <div>
          <img src={samsung} alt="" width={"138px"} />
        </div>
        <div>
          <img src={monday} alt="" width={"138px"} />
        </div>
        <div>
          <img src={segment} alt="" width={"138px"} />
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
