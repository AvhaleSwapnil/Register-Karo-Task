import React from "react";
import about from "../assets/about.png";
import dotted from "../assets/dotted.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="px-10 w-full py-20 flex flex-col lg:flex-row gap-5 relative">
      <div className="w-full lg:w-1/2">
        <h1 className="text-[#EB8D15]">WELCOME TO REGISTERKARO.IN</h1>
        <div className="text-2xl lg:text-3xl font-bold">
          About <span className="text-[#FFA229]">Register Karo</span>
        </div>
        <p className="text-[#0D1216] pt-5">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations. <br />I would strongly recommend their
          services to any organization that is looking for solid, reliable, and
          predictable outcomes.
        </p>
        <button className="px-5 py-3 flex items-center gap-3 bg-[#1C4670] text-[#FFFFFF] mt-8">
          Learn more{" "}
          <span>
            <FaRegArrowAltCircleRight size={18} />
          </span>
        </button>
      </div>
      <div className="w-full lg:w-1/2 z-40">
        <img
          src={about}
          alt=""
          width={"580px"}
          height={"418px"}
          className="self-center"
        />
      </div>
      <img src={dotted} alt="" className="absolute top-63 right-0" />
    </div>
  );
};

export default About;
