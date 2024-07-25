"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="features" className="bg-[#09002a] px-[10%] py-[50px] md:py-[5%]">
      <div
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-center gap-[10px] md:justify-between"
      >
        <div className="text-[20px] md:text-[30px] lg:text-[40px] font-[600] flex items-center gap-[10px] md:gap-[20px]">
          <p>1100+</p>
          <p className="text-[12px] lg:text-[20px] font-[400] text-[#1BF8FD]">
            active users
          </p>
        </div>
        <div className="text-[20px] md:text-[30px] lg:text-[40px] font-[600] flex items-center gap-[10px] md:gap-[20px]">
          <p>100+</p>
          <p className="text-[12px] lowercase lg:text-[20px] font-[400] text-[#1BF8FD]">
            TRUSTED BY COMPANY
          </p>
        </div>
        <div className="text-[20px] md:text-[30px] lg:text-[40px] font-[600] flex items-center gap-[10px] md:gap-[20px]">
          <p>$50M+</p>
          <p className="text-[12px] lowercase lg:text-[20px] font-[400] text-[#1BF8FD]">
            in TRANSACTIONs
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col lg:flex-row gap-[3%] pt-[10%]"
      >
        <div className="space-y-8 lg:w-[60%]">
          {/* <h2 className="text-[#5CE1E6] text-[45px] leading-[72px]">
            The Crypto Challenge:{" "}
            <span className="text-white">Volatility & Security</span>
          </h2> */}
          <img src="/assets/fonts/The Crypto Challenge_ Volatility & Security.svg" />
          <p className="text-[15px] md:text-[18px] leading-[23px] md:leading-[30px] text-white/70">
            While the ever-changing landscape of cryptocurrency presents great
            opportunities, the wild price swings and security risks can leave
            your business exposed. Galileo Capital offers a safe and reliable
            platform for managing your cryptocurrency assets.
          </p>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              Get Started
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg z-10">
                <a
                  href="https://www.jotform.com/233520788042859"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For USA Individuals
                </a>
                <a
                  href="https://www.jotform.com/240868739736171"
                  className="block px-4 py-2 text-black hover:bg-[#28C0F5] hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For USA Business
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-[40%] pt-[8%] lg:pt-0 space-y-4">
          <div className="md:pl-[120px] lg:pl-4 flex gap-[5%] items-center hover-gradient p-2 md:p-4 rounded-[20px]">
            <img src="/assets/Icons/icon1.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] pb-2">
                Regulatory Compliance
              </h5>
              <p>Licensed and regulated in the US and Costa Rica.</p>
            </div>
          </div>
          <div className="md:pl-[60px] lg:pl-4 flex gap-[5%] items-center hover-gradient p-2 md:p-4 rounded-[20px]">
            <img src="/assets/Icons/icon2.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] pb-2">
                Personalized Service
              </h5>
              <p>Dedicated account managers for tailored support.</p>
            </div>
          </div>
          <div className="flex gap-[5%] items-center hover-gradient p-2 md:p-4 rounded-[20px]">
            <img src="/assets/Icons/icon3.png" />
            <div>
              <h5 className="text-[18px] md:text-[20px] leading-[26px] font-[600] pb-2">
                Secure Transactions
              </h5>
              <p>
                Advanced blockchain technology and secure trading algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
