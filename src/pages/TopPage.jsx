import React from "react";
import img from '../images/about/stick.png'

function TopPage() {
  return (
    <>
      <header className="  w-full h-[740px] bg-[#ffff] flex flex-col-reverse justify-end lg:h-[990px] lg:flex-row lg:relative">
        {/* one for the picture and the other one for the contend */}
        <div className="lg:flex-1 lg:flex">
         
        <div className="relative top-[100px]  w-full h-[187px] flex flex-col justify-center items-center text-center  lg:flex-1  lg:w-[348px] lg:h-[395px] lg:top-[224px] lg:right-[97px] ">
          <div
            className="text-[#0E2368]   md:text-center 
           font-sans font-[700] text-[38px] h-[130px] flex flex-wrap w-[240px] items-center justify-center leading-[46px] lg:w-[400px] lg:h-[207px] lg:text-[62px] lg:leading-[65px] lg:flex-nowrap   "
          >
            <p>
              Discover the <span className="text-[#E23744]">Best</span> Food and
              Drinks
            </p>
          </div>
          <div className="relative top-[26px] flex  w-[248px] h-[36px] lg:w-[345px] lg:h-[55px] lg:top-[20px] lg:leading-[25px] ">
            <p
              className="font-sans font-normal text-[11px] leading-[18px] text-[#444957] lg:text-[16.447px] lg:leading-[27px]
          "
            >
              Naturally made Heatlcare Products for the better care and support
              of you body
            </p>
          </div>

          <div className="relative top-[50px] bg-[#E23744] rounded-[30px] w-[120px] h-[40px]   flex items-center justify-center text-[#fff]  lg:top-[41px] lg:w-[190px] lg:h-[63px]  lg:font-bold  ">
            <p className="px-[12px] py-[30px] ">Explore Now!</p>
          </div>
        </div>

        </div>
       

        

        {/* for the image */}
        <div className="  h-[426px] w-full bg-red-500  lg:h-[839px] lg:w-[752px] lg:flex-1 ">
          {/* for the image */}
        </div>
      </header>
    </>
  );
}

export default TopPage;
