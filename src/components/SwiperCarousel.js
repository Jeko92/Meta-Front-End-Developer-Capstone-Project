import "./component-styles/SwiperCarousel.css";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={32}
        autoplay={{
          delay: 1300,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <img
            src={require("../assets/images/round-plate.png")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/mezze.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/moussaka.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/paella.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/potato-salad.png")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/tapas.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/risotto.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/greek-salad.jpg")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require("../assets/images/chef.png")}
            alt="Restaurant and food"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
