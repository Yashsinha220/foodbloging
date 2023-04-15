import React from "react";
import tomatoimg from "../images/about/grilled-tomatoes-1-846x846 3.png";

function Cards({ imgsource, title }) {
  return (
    <div className="w-[271px] h-[484px] rounded-3xl border-black border-[1px] mx-auto lg:mx-0 lg:w-[381px] lg:h-[554px] lg:bg-[#FFFFFF]  lg:border-[1.37039px] lg:border-solid lg:border-[#93A2D3] lg:rounded-[20.937px]">
      <div className="">
        <div
          className="w-[204px] h-[168px] mx-auto mt-[40px] lg:w-[326px] lg:h-[257px] lg:mt-[27px]"
        //   style={{ backgroundImage: `url(${imgsource})` }}
        >
          <img src={`${imgsource}`} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="mt-[39px] mx-auto  w-[236px] h-[35px]  lg:w-[287px] lg:h-[27px] lg:mt-[34.47px] ">
          <p className=" font-sans  font-bold  text-[16px] leading-[35px] tracking-[0.05em] text-[#0E2368] lg:text-[21px] 
          lg:leading-[27px]f lg:font-bold lg:text-center">
            {title}
          </p>
        </div>
        <div className="mt-[6px] w-[213px] h-[106px] mx-auto lg:w-[295px] lg:h-[81px] ">
          <p className="text-center font-[400] text-[12px] leading-[22px] tracking-[-0.01em] text-[#444957] lg:text-[15px] lg:leading-[27px] lg:tracking-[-0.02rem]">
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley....
          </p>
        </div>
        <div className="mt-[30px] w-[118px] h-[26px] border-[2px] border-solid border-[#424961] rounded-[27px] text-center  mx-auto box-border flex items-center justify-center  lg:w-[131px] lg:h-[42px] lg:mx-0  lg:mt-[63px] lg:mx-auto  ">
          <p className="font-sans font-[600] text-[11px] leading-[46px] tracking-[0.03em] text-[#424961] lg:text-[16.47px] lg:leading-[36.67px] lg:tracking-[0.03em] ">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
