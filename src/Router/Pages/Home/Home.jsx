import React from 'react';
import Banner from './Banner/Banner';
import CardSlider from './CardSlider/CardSlider';
// import i from '../../../assets/chef-service.jpg'

import './Home.css'
import PopularMenu from './PopularMenu/PopularMenu';
import Testimonials from './Testimonials/Testimonials';
import FeatureMenu from './OurMenu/FeatureMenu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bestro Boss | Home</title>
            </Helmet>
            {/* Carousel Section */}
            <Banner></Banner>
           {/* Card Slider */}
            <div className='my-20'>
                <CardSlider></CardSlider>
            </div>
            {/* Bestor image */}
            <div className="bg-fixed image h-[80vh] my-20">
                <div className='h-[80vh] px-5 flex flex-col justify-center items-center text-center '>
                    <div className='lg:w-2/3 lg:p-20 p-5 bg-white space-y-3'>
                        <h1 className='text-4xl'>Bistro Boss</h1>
                        <p>The word derives from the early 19th century, taken from the French word restaurer 'provide food for', literally 'restore to a former state'[2] and, being the present participle of the verb,[3] the term restaurant may have been used in 1507 as a "restorative beverage", and in correspondence in 1521 </p>
                    </div>
                </div>
            </div>
            {/* Check Out */}
            <div>
               <PopularMenu></PopularMenu>
            </div>
            {/* Our Menu */}
            <div>
                <FeatureMenu></FeatureMenu>
            </div>
            {/* Testimonials */}
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;