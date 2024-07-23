"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Security = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="grid lg:grid-cols-2 items-start overflow-hidden gap-[3%] bg-[#09002a] px-[10%] pb-[8%] py-[50px] md:py-[5%]">
      <div data-aos="fade-up" className="hidden md:block md:w-full ">
        <img src="/assets/img2.png" className="w-full h-full" />
      </div>

      <div
        data-aos="fade-up"
        className="space-y-8 pt-[8%]  lg:pt-[4%] md:pb-[11%] lg:pb-0 md:ml-[40%] lg:ml-0 md:w-[60%]"
      >
        {/* <h2 className="text-white text-[45px] leading-[72px]">
          Minimized Volatility & Enhanced Security
        </h2> */}
        <img src="/assets/fonts/Minimized Volatility & Enhanced Security.svg" />
        <p className="text-[18px] text-center md:text-end lg:text-start leading-[30px] lg:w-[75%] text-white/70">
          Our hedging strategies help mitigate price fluctuations, while
          Industry-leading security measures safeguard your assets.
        </p>
        <div className="relative">
          <img
            src="/assets/bg-art.png"
            className="hidden md:block absolute lg:-top-40 -top-[200px] -left-[75%] lg:left-[60%]  "
          />
        </div>
      </div>

      <div data-aos="fade-up" className="md:hidden md:w-full ">
        <img src="/assets/img2.png" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Security;
