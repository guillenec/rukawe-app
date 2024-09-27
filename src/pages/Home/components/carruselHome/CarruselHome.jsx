import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner_final from '../../../../img/banner_final.png'
import banner2 from '../../../../img/banner2.png'
import dinosaurio from '../../../../img/dinosaurio.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarruselHome = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className='h-full'

    >
      <SwiperSlide>
        <img src={banner_final} alt="banner 1 aplicacion" className='w-full h-full overflow-hidden object-contain' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="banner 2 aplicacion" className='w-full h-full overflow-hidden object-contain' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={dinosaurio} alt="banner 3 aplicacion" className='w-full h-full overflow-hidden object-contain' />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default CarruselHome




