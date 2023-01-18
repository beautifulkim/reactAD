import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';

function Banner() {
    return (
        <Swiper
            modules={[ Pagination, Autoplay ]}
            spaceBetween={ 50 }
            slidesPerView={ 2 }
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            centeredSlides={ true }
            pagination={{
                type: "franction", 
                // clickable: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={( swiper ) => console.log('swiper 테스트 : ', swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide> 
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            
        </Swiper>
    )
}

export default Banner;