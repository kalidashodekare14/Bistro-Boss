import React from 'react';
import FoodCard from '../../../../Components/FoodCard/FoodCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
            {
                item.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;