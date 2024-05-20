import React from 'react';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item

    return (
        <div className=" card bg-base-100 shadow-xl">
            <div className='relative'>
                <figure><img src={image} alt="Shoes" /></figure>
                <div>
                    <span className='absolute top-3 right-3 bg-black text-white p-2'>${price}</span>
                </div>
            </div>
            <div className="card-body">
                <h2 className="text-[18px] font-bold text-center">{name}</h2>
                <p className='text-[15px]'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className='btn bg-opacity-0 border-0 border-b-[#bb8506] hover:text-black text-[#bb8506] hover:bg-[#bb8506]  border-b-2'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;