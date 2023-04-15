import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Cards from "../components/Cards";
import { data } from "../constants";
const { imgfirst, imgsecond, imgthird, imgfourth, imgfifth, imgsixth } = data;
function Articles() {
  var swiperDirection = window.innerWidth < 768 ? 'vertical' : 'horizontal';
  return (
    <div className="w-full h-[300px]  relative lg:h-[994px] bg-[#ffff] top-[141px]">
      <div className="relative top-[132px]  w-[216px] h-[54px]  mx-auto text-center lg:mx-0 lg:w-[461px] lg:h-[84px] ml-[108px] ">
        <p className=" text-[28px] leading-[54px] text-[#0E2368] tracking-[0.04rem] font-bold lg:text-[56px] lg:leading-[42px] lg:tracking-[0.04rem]">
          Latest Articles
        </p>
      </div>

      <div className="mt-[150px] flex justify-center items-center flex-col gap-10 lg:flex-row lg:gap-20 lg:mt-[170px] lg:ml-[108px] lg:w-[92%] brod">
        <Swiper
          
          navigation={true} 
          modules={[ Navigation]}
          className="mySwiper"
          direction= 'horizontal'
          loop ={true
          }
          // slidesPerView={3}

         breakpoints={{

          0 : {
            slidesPerView :1,
          },
          1080 : {
            slidesPerView : 3,

          }
         }}

      
        >
          <SwiperSlide>
            <Cards
              imgsource={imgfirst}
              title={"Grilled Tomatoes at Home"}
            ></Cards>
          </SwiperSlide>
          <SwiperSlide>
            <Cards imgsource={imgsecond} title={"Snacks for Travel"}></Cards>
          </SwiperSlide>
          <SwiperSlide>
            <Cards imgsource={imgthird} title={" Post-workout Recipes"}></Cards>
          </SwiperSlide>
          <SwiperSlide>
            <Cards imgsource={imgfourth} title={"Snacks for Travel"}></Cards>
          </SwiperSlide>
          <SwiperSlide>
            <Cards imgsource={imgfifth} title={"Snacks for Travel"}></Cards>
          </SwiperSlide>
          <SwiperSlide>
            <Cards imgsource={imgsixth} title={"Snacks for Travel"}></Cards>
          </SwiperSlide>
          {/* <SwiperSlide>
            
            <Cards imgsource={imgfirst} title={'Grilled Tomatoes at Home'}></Cards>
            <Cards imgsource={imgsecond} title={'Snacks for Travel'}></Cards>
            <Cards imgsource={imgthird} title={' Post-workout Recipes'}></Cards>
              </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Articles;
