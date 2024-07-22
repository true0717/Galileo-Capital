"use client";
import React, { useState } from "react";

import HeroAnim from "../../../public/assets/lottie/hero-anim.json";
import Lottie from "react-lottie";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const navItems = ["Home", "Features", "Solution", "Process", "About Us"];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setShow(false);
  };

  const handleMobile = () => {
    setShow(false);
  };

  return (
    <div className="text-white gradient-background py-[5%]">
      <header className="flex justify-between w-full items-start">
        <div className="md:mx-[5%] ">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 a-auto md:h-14 lg:h-auto"
          />
        </div>
        <div className="hidden lg:flex mx-[2%] gap-[50px] items-center">
          <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  activeIndex === index ? "" : "text-white/70 text-[16px]"
                }`}
                onClick={() =>
                  handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]">
            Get Started
          </button>
        </div>

        <div className="lg:hidden">
          <img
            onClick={() => setShow(!show)}
            src="/assets/Icons/menu.svg"
            className="h-10 w-10 text-white "
          />
        </div>
        <div className="absolute lg:hidden">
          <div
            className={`${
              show === true ? "block" : "hidden"
            } fixed z-50 top-20 about-gradient right-5 backdrop-blur-lg py-4 px-5 rounded-lg`}
          >
            <ul className="text-[15px] space-y-3 cursor-pointer  gap-[50px] font-[700]">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item `}
                  onClick={() =>
                    handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="flex px-[9%] flex-col h-[700px] lg:flex-row gap-[2%] 2xl:gap-[5%] pt-[5%] items-start justify-center">
        <div className="lg:w-[60%] space-y-8">
          <h2 className="text-[42px] md:text-[72px] font-[600] leading-[60px] lg:leading-[100px]">
            Cryptocurrency <br /> Done Right with
          </h2>
          <img src="/assets/fonts/Galileo capital.svg" className="w-full" />
          <p className="text-[18px] md:text-[23px] lg:text-[27px] font-[300] leading-[28px] md:leading-[38px]">
            Safeguard Your Assets and Navigate the volatile world of crypto
            assets with our{" "}
            <span className="font-[500]">secure and compliant</span> platform.
          </p>
          <button className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]">
            Get Started
          </button>
        </div>
        <div className="h-[85%]">
          <Lottie options={defaultOptions} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
