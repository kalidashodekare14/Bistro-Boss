import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import menu from '../../../../assets/home/featured.jpg'

import './FeatureMenu.css'

const FeatureMenu = () => {
    return (
        <section>
            <div className='bg-fixed min-h-screen ourMenu my-20 text-white'>
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                />
                <div className='h-[60%] flex space-x-10 justify-center items-center'>
                    <div className='w-[40%]'>
                        <img src={menu} alt="" />
                    </div>
                    <div className='w-[40%] space-y-2'>
                        <p className='text-[16px]'>March 20, 2023</p>
                        <h3 className='text-[18px]'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className='pt-5'>
                            <button className='btn bg-opacity-0 border-0 text-white hover:text-black  border-b-2'>Read More</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FeatureMenu;