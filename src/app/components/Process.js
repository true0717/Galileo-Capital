"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProcessAnim1 from "../../../public/assets/lottie/process1.json";
import ProcessAnim2 from "../../../public/assets/lottie/process2.json";
import ProcessAnim3 from "../../../public/assets/lottie/process3.json";
import ProcessAnim4 from "../../../public/assets/lottie/process4.json";
import Lottie from "react-lottie";

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: ProcessAnim4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="process" className="bg-[#09002a]">
      <div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          className="pl-[5%] lg:pl-[25%] py-4 md:py-8 flex flex-col md:flex-row text-center md:text-start items-center gap-[5%] process-gradient"
        >
          <div className="w-[164px] h-auto">
            <Lottie options={defaultOptions} />
          </div>

          <div>
            <h4 className="text-[30px] lg:text-[45px] leading-[63px]">
              Initial Evaluation
            </h4>
            <p className="text-[20px] lg:text-[27px] leading-[38px]">
              Analyze your specific needs and risk profile.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          className="pl-[5%] lg:pl-[25%] py-4 md:py-8 flex flex-col md:flex-row text-center md:text-start  items-center gap-[5%] process-gradient"
        >
          <div className="w-[164px] h-auto">
            <Lottie options={defaultOptions2} />
          </div>

          <div>
            <h4 className="text-[30px] lg:text-[45px] leading-[47px] lg:leading-[63px]">
              Registration and Compliance
            </h4>
            <p className="text-[20px] lg:text-[27px] leading-[38px]">
              Complete customer onboarding and KYC/AML procedures.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          className="pl-[5%] lg:pl-[25%] py-4 md:py-8 flex flex-col md:flex-row text-center md:text-start  items-center gap-[5%] process-gradient"
        >
          <div className="w-[164px] h-auto">
            <Lottie options={defaultOptions3} />
          </div>

          <div>
            <h4 className="text-[30px] lg:text-[45px] leading-[47px] lg:leading-[63px]">
              Transactions and Liquidation
            </h4>
            <p className="text-[20px] lg:text-[27px] leading-[38px]">
              Execute and settle transactions securely.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          className="pl-[5%] lg:pl-[25%]  py-4 md:py-8 flex flex-col md:flex-row text-center md:text-start  items-center gap-[5%] process-gradient"
        >
          <div className="w-[164px] h-auto">
            <Lottie options={defaultOptions4} />
          </div>

          <div>
            <h4 className="text-[30px] lg:text-[45px] leading-[63px]">
              Monitoring and Support{" "}
            </h4>
            <p className="text-[20px] lg:text-[27px] leading-[38px]">
              Receive continuous monitoring and personalized assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
