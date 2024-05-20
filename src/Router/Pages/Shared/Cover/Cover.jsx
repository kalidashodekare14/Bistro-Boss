import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ image, title, description }) => {
    return (
        <Parallax
            bgImage="/path/to/another/image"
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: `url("${image}")` }}>

                <div className=""></div>
                <div className="hero-content bg-black bg-opacity-55 w-3/4 px-52 py-12 text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;