import React from "react";
import img from '../images/about/stick.png'

function AboutUs() {
  return (
    <section className="relative top-[150px] w-full h-[516px] bg-[#F0F1F7] lg:h-[467px] lg:flex lg:flex-row justify-between ">
      <div className="lg:h-full lg:w-[384px] relative left-[205px] hidden lg:block ">
        <img src= {`${img}`} alt="" />

      </div>
      <div className=" relative lg:absolute top-[140px] w-[275px] h-[235px]  mx-auto  lg:flex lg:items-start flex-col lg:w-[447px] lg:h-[254px] lg:left-[789px] lg:right-[204px] ">
        <div className="w-[120px] h-[35px]  mx-auto  text-center font-sans font-bold text-[26px] leading-[35px] text-[#0E2368]  lg:mx-0 lg:w-[422px] lg:h-[26px] lg:text-[45px] lg:leading-[27px] lg:order-1 lg:font-bold ">
          About Us
        </div>
        <div className=" relative top-[21px] w-[275px] h-[138px] font-sans font-[400] text-[11px] leading-[21px] text-center text-[#444957] lg:mx-0 lg:w-[447px] lg:h-[138px] lg:text-[15px] lg:leading-[27px] lg:flex-none lg:order-2   lg:flex-nowrap">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </div>
        <div className="relative top-[40px] bg-[#E23744] rounded-[30px] w-[120px] h-[33px]   flex items-center justify-center text-[#fff]    mx-auto   order-3  lg:w-[132px] lg:h-[42px] lg:top-[30px]   ">
          <p className="px-[12px] py-[30px] ">Read More</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
