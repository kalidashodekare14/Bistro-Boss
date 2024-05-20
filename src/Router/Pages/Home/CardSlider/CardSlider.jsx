import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide from '../../../../assets/home/slide1.jpg'
import slide1 from '../../../../assets/home/slide2.jpg'
import slide2 from '../../../../assets/home/slide3.jpg'
import slide3 from '../../../../assets/home/slide4.jpg'
import slide4 from '../../../../assets/home/slide5.jpg'

// import './CardSlider.css';

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const CardSlider = () => {
    return (

        <section>
            <SectionTitle 
            subHeading={'---From 11:00 to 10:00pm---'}
            heading={'Order Online'}
            ></SectionTitle>
           
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='' src={slide} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-3xl uppercase text-center -mt-16'>Soups</h3>
                </SwiperSlide>

            </Swiper>
        </section>

    );
};

export default CardSlider;