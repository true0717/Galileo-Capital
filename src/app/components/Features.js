"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="features" className="bg-[#09002a] px-[10%] py-[5%]">
      <div data-aos="fade-up" className="flex justify-between">
        <div className="text-[40px] font-[600] flex items-center gap-[20px]">
          <p>1100+</p>
          <p className="text-[20px] font-[400] text-[#1BF8FD]">active users</p>
        </div>
        <div className="text-[40px] font-[600] flex items-center gap-[20px]">
          <p>100+</p>
          <p className="text-[20px] font-[400] text-[#1BF8FD]">
            TRUSTED BY COMPANY
          </p>
        </div>
        <div className="text-[40px] font-[600] flex items-center gap-[20px]">
          <p>$50M+</p>
          <p className="text-[20px] font-[400] text-[#1BF8FD]">
            in TRANSACTIONs
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="flex gap-[3%] pt-[10%]">
        <div className="space-y-8 w-[60%]">
          {/* <h2 className="text-[#5CE1E6] text-[45px] leading-[72px]">
            The Crypto Challenge:{" "}
            <span className="text-white">Volatility & Security</span>
          </h2> */}
          <img src="/assets/fonts/The Crypto Challenge_ Volatility & Security.svg" />
          <p className="text-[18px] leading-[30px] text-white/70">
            While the ever-changing landscape of cryptocurrency presents great
            opportunities, the wild price swings and security risks can leave
            your business exposed. Galileo Capital offers a safe and reliable
            platform for managing your cryptocurrency assets.
          </p>
          <button className="bg-[#FCF0F8] text-black py-4 px-9 rounded-full text-[17px] font-[500]">
            Get Started
          </button>
        </div>

        <div className="w-[40%] space-y-4">
          <div className="flex gap-[5%] items-center hover-gradient p-4 rounded-[20px]">
            <img src="/assets/Icons/icon1.png" />
            <div>
              <h5 className="text-[20px] leading-[26px] font-[600] pb-2">
                Regulatory Compliance
              </h5>
              <p>Licensed and regulated in the US and Costa Rica.</p>
            </div>
          </div>
          <div className="flex gap-[5%] items-center hover-gradient p-4 rounded-[20px]">
            <img src="/assets/Icons/icon2.png" />
            <div>
              <h5 className="text-[20px] leading-[26px] font-[600] pb-2">
                Personalized Service
              </h5>
              <p>Dedicated account managers for tailored support.</p>
            </div>
          </div>
          <div className="flex gap-[5%] items-center hover-gradient p-4 rounded-[20px]">
            <img src="/assets/Icons/icon3.png" />
            <div>
              <h5 className="text-[20px] leading-[26px] font-[600] pb-2">
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
