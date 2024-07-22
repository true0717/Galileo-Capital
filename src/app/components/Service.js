"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-[5%] pb-[15%] lg:pb-[8%] bg-[#09002a] px-[10%] py-[5%]">
      <div data-aos="fade-up" className="">
        {/* <h2 className="text-white text-[45px] leading-[72px]">
          Guiding you through the whole process
        </h2> */}
        <img src="/assets/fonts/Guiding you through the whole process.svg" />
        <p className="text-[18px] py-6 leading-[30px] text-white/70">
          Our team of blockchain and crypto experts is here to guide you. Plus,
          we handle all regulatory requirements on your behalf.
        </p>
        <button className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]">
          Get Started
        </button>
      </div>
      <div data-aos="fade-up" className="h-full">
        <img src="/assets/img3.png" />
      </div>
    </div>
  );
};

export default Service;
