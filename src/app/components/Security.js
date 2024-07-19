import React from "react";

const Security = () => {
  return (
    <div className="flex items-start gap-[8%] bg-[#09002a] px-[10%] pb-[8%] py-[5%]">
      <div className="w-[40%]">
        <img src="/assets/img2.png" className="w-full h-full" />
      </div>

      <div className="space-y-8 w-[60%]">
        {/* <h2 className="text-white text-[45px] leading-[72px]">
          Minimized Volatility & Enhanced Security
        </h2> */}
        <img src="/assets/fonts/Minimized Volatility & Enhanced Security.svg" />
        <p className="text-[18px] leading-[30px] w-[75%] text-white/70">
          Our hedging strategies help mitigate price fluctuations, while
          Industry-leading security measures safeguard your assets.
        </p>
        <div className="relative">
          <img
            src="/assets/bg-art.png"
            className="absolute -top-40 left-[60%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
