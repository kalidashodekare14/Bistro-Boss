import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='my-10'>
            <p className='text-center mb-5 border-b-2 w-72 m-auto text-yellow-500 text-[17px]'>{subHeading}</p>
            <h1 className='text-center text-4xl uppercase pb-4 border-b-2 w-80 m-auto'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;