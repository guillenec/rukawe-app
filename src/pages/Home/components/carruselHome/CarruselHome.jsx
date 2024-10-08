import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../../img/banner1.png'
import banner3 from '../../../../img/banner3.png'
import banner7 from '../../../../img/banner7.png'


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
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      className='h-full'

    >
      <SwiperSlide>
        <img src={banner1} alt="banner 1 aplicacion" className='w-full h-full overflow-hidden object-cover lg:object-contain object-center bg-[#1b4261]' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="banner 3 aplicacion" className='w-full h-full overflow-hidden object-cover lg:object-contain object-center bg-[#f9993c]' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner7} alt="banner 7 aplicacion" className='w-full h-full overflow-hidden object-cover lg:object-contain bg-[#9db39c]' />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default CarruselHome




