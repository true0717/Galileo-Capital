import React from "react";
import "../globals.css";

const Solution = () => {
  return (
    <div id="solution" className="flex gap-[2%] bg-[#09002a] px-[10%] py-[5%]">
      <div className="w-[65%]">
        <div className="grid pb-[15%] grid-cols-3 justify-between">
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src="/assets/Icons/icon4.png" />
            <p className="text-[27px] font-[500] leading-[38px]">
              Advanced Blockchain Technology
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src="/assets/Icons/icon5.png" />
            <p className="text-[27px] font-[500] leading-[38px]">
              Secure Trading Algorithms
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-[20px]">
            <img src="/assets/Icons/icon6.png" />
            <p className="text-[27px] font-[500] leading-[38px]">
              Robust Custody Agreements
            </p>
          </div>
        </div>
        {/* <h3 className="text-[45px] leading-[63px] gradient-text">
          Partner with Galileo Capital and experience the future of
          cryptocurrency liquidation.
        </h3> */}
        <img src="/assets/fonts/Partner with Galileo Capital and experience the future of cryptocurrency liquidation..svg" />
      </div>
      <div className="w-[35%]">
        <img src="/assets/img1.png" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Solution;
