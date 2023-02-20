import React, { useState } from "react";
import ListProductCard from "./ListProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import axios from "axios";
import DailyDeals from "./DailyDeals";
import RightSideLastBar from "./RightSideLastBar";

const RightSideLastMiddlebar = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://api.hiring.masterkey.tech/api/v1/product/get"
      );
      if (res && res.status === 200) {
        setProducts([...res?.data?.products]);
      }
    };
    getProducts();
  }, []);

  //   const [swiperRef, setSwiperRef] = useState(null);
  //   const prevHandler = () => {
  //     swiperRef.slidePrev();
  //   };

  //   const nextHandler = () => {
  //     swiperRef.slideNext();
  //   };
  return (
    <>
      <div className="w-full flex items-start mt-10 gap-x-4">
        <div className="w-[70%]">
          <Swiper
            slidesPerView={3}
            spaceBetween={4}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            //   onSwiper={(swiper) => setSwiperRef(swiper)}
            className="mySwiper w-full h-full"
            //   breakpoints={{
            //     // when window width is >= 320px
            //     320: {
            //       slidesPerView: 1,
            //       spaceBetween: 4,
            //     },
            //     // when window width is >= 480px
            //     390: {
            //       slidesPerView: 2,
            //       spaceBetween: 2,
            //     },
            //     400: {
            //       slidesPerView: 2,
            //       spaceBetween: 4,
            //     },
            //     500: {
            //       slidesPerView: 3,
            //       spaceBetween: 1,
            //     },
            //     540: {
            //       slidesPerView: 3,
            //       spaceBetween: 2,
            //     },
            //     640: {
            //       slidesPerView: 3,
            //       spaceBetween: 2,
            //     },
            //     768: {
            //       slidesPerView: 4,
            //       spaceBetween: 2,
            //     },
            //     992: {
            //       slidesPerView: 4,
            //       spaceBetween: 2,
            //     },
            //     1200: {
            //       slidesPerView: 5,
            //       spaceBetween: 2,
            //     },
            //     1294: {
            //       slidesPerView: 5,
            //       spaceBetween: 2,
            //     },
            //     1396: {
            //       slidesPerView: 5,
            //       spaceBetween: 2,
            //     },
            //     1400: {
            //       slidesPerView: 6,
            //       spaceBetween: 4,
            //     },
            //   }}
          >
            {products &&
              products?.map((item, i) => (
                <SwiperSlide key={i}>
                  <ListProductCard data={item} />
                </SwiperSlide>
              ))}
          </Swiper>
          <RightSideLastBar />
        </div>
        <div className="w-[30%]">
          <DailyDeals products={products} />
        </div>
      </div>
    </>
  );
};

export default RightSideLastMiddlebar;
