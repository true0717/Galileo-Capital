import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#3F3E45] px-[10%] pt-[3%]">
      <div className="flex justify-between items-center py-[5%]">
        <div className="flex w-[30%] text-start flex-col items-center">
          <img src="/assets/logo-footer.png" />
          <p className="text-white/70 pt-6 text-[18px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex gap-[90px]">
          <ul className="text-[16px] text-white/70 leading-[24px] space-y-5">
            <li className="text-[18px] font-[500] text-white pb-3">Galileo</li>
            <li className="text-white/70 cursor-pointer">Home</li>
            <li className="text-white/70 cursor-pointer">Features</li>
            <li className="text-white/70 cursor-pointer">Solution</li>
            <li className="text-white/70 cursor-pointer">Process</li>
            <li className="text-white/70 cursor-pointer">About Us</li>
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
      <div className="border-t border-white/50 py-[3%]  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="text-[18px] leading-[27px]">Copyright</p>
          <p className="text-[18px] leading-[27px]">
            2021 Galileo Capital. All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-4 items-center">
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
            src="/assets/Icons/Linkedin.svg"
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
