import React from "react";
import oracle from "../assets/oracle.png";
const HomeBottom = () => {
  return (
    <div className="h-[236px] text-center px-10">
      <p className="text-xl lg:text-2xl text-[#272D37] mt-18">
        Trusted By Over 100+ Startups and freelance business
      </p>
      <div>
        <img src={oracle} alt="" width={"138px"} />
      </div>
    </div>
  );
};

export default HomeBottom;
