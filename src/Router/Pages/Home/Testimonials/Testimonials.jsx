import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

import { Navigation } from 'swiper/modules';
import axios from 'axios';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                // console.log(res.data)
                setReviews(res.data)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(data => (
                        <SwiperSlide>
                            <div className='flex justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={data.rating}
                                    readOnly
                                />
                            </div>
                            <div className='my-20 w-2/3 m-auto space-y-3'>
                                <p></p>
                                <h2 className='text-center'>{data.details}</h2>
                                <h1 className='text-center text-4xl'>{data.name}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </section>
    );
};

export default Testimonials;