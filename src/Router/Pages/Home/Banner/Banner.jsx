import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../../../../assets/home/01.jpg'
import img1 from '../../../../assets/home/02.jpg'
import img2 from '../../../../assets/home/03.png'
import img3 from '../../../../assets/home/04.jpg'
import img4 from '../../../../assets/home/05.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;