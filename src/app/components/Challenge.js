import React from "react";

const Challenge = () => {
  return (
    <div className="bg-[#09002a] px-[10%] py-[5%]">
      <div className="flex justify-between">
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
    </div>
  );
};

export default Challenge;
