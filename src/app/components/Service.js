import React from "react";

const Service = () => {
  return (
    <div className="grid grid-cols-2 gap-[5%] bg-[#09002a] px-[10%] py-[5%]">
      <div className="">
        <h2 className="text-white text-[45px] leading-[72px]">
          Guiding you through the whole process
        </h2>
        <p className="text-[18px] leading-[30px] text-white/70">
          Our team of blockchain and crypto experts is here to guide you. Plus,
          we handle all regulatory requirements on your behalf.
        </p>
        <button className="mt-8 bg-[#FCF0F8] text-black py-4 px-9 rounded-full text-[17px] font-[500]">
          Get Started
        </button>
      </div>
      <div className="relative">
        <img src="/assets/img3.png" />
      </div>
    </div>
  );
};

export default Service;
