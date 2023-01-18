import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';

function Banner( props ) {
    return (
        <div id={ props.objid } className='h-100'>
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
                <SwiperSlide className='d-flex flex-column jutify-content-center align-content-center' style={ { height : '800px' } }>Slide 1</SwiperSlide> 
                <SwiperSlide className='d-flex flex-column jutify-content-center align-content-center' style={ { height : '800px' } }>Slide 1</SwiperSlide> 
                <SwiperSlide className='d-flex flex-column jutify-content-center align-content-center' style={ { height : '800px' } }>Slide 1</SwiperSlide> 
                
            </Swiper>
        </div>
    )
}

export default Banner;