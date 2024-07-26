"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSmoothScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0B0A0C] px-[10%] pt-[3%]">
      <div className="flex flex-col md:flex-row justify-between items-center py-[5%]">
        <div className="flex md:w-[30%] mb-12 md:mb-0 text-start flex-col items-start">
          <img src="/assets/logo-footer.png" />
          <p className="text-white/70 pt-6 text-[18px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex gap-[90px]">
          <ul className="text-[16px] text-white/70 leading-[24px] space-y-5">
            <li className="text-[18px] font-[500] text-white pb-3">Galileo</li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("home")}
            >
              Home
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("features")}
            >
              Features
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("solution")}
            >
              Solution
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("process")}
            >
              Process
            </li>
            <li
              className="text-white/70 cursor-pointer"
              onClick={() => handleSmoothScroll("about-us")}
            >
              About Us
            </li>
          </ul>
          <ul className="text-[16px] text-white/70 leading-[24px] space-y-5">
            <li className="text-[18px] font-[500] text-white pb-3">
              Social Media
            </li>
            <li className="text-white/70 cursor-pointer">Whatsapp</li>
            <li className="text-white/70 cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/50 py-[3%] flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="text-[18px] leading-[27px] text-center md:text-start">
            2021 Galileo Capital. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4 items-center pt-[4%] lg:pt-0">
          <img
            src="/assets/Icons/Facebook.svg"
            className="cursor-pointer hover:scale-110 duration-300 "
          />
          <img
            src="/assets/Icons/Instagram.svg"
            className="cursor-pointer hover:scale-110 duration-300 "
          />
          <img
            src="/assets/Icons/Twitter.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <img
            src="/assets/Icons/linkedin.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
