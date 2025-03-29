import { useRef, useState } from "react"
// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules'
const BannerCard = () => {
  return (
    <div className="banner">
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
            <SwiperSlide>https://www.goodreads.com/book/show/58891551-young-mungo</SwiperSlide>
            <SwiperSlide>https://www.goodreads.com/book/show/59575939-an-immense-world</SwiperSlide>
            <SwiperSlide>https://www.goodreads.com/book/show/59366244-i-m-glad-my-mom-died</SwiperSlide>
            <SwiperSlide>https://www.goodreads.com/book/show/59366244-i-m-glad-my-mom-died</SwiperSlide>
            <SwiperSlide>https://www.goodreads.com/book/show/58733693-remarkably-bright-creatures</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard

