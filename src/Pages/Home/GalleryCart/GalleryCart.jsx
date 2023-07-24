import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

const GalleryCart = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[500px] w-[400px]' src='https://i.ibb.co/zP0CZJD/college-building-clipart-md.png'/></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-[400px]'  src='https://i.ibb.co/6sXzRXP/university-college-clipart-md.png'/></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-[400px]'  src='https://i.ibb.co/TbcwDbC/school-building-clipart-md.png'/></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-[400px]'  src='https://i.ibb.co/3c368kF/school-building-clipart-md-1.png'/></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-[400px]'  src='https://i.ibb.co/V3FMzZk/school-clipart-md.png'/></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-[400px]'  src='https://i.ibb.co/sqVk2Sg/school-entrance-ceremony-clipart-md.png'/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default GalleryCart;