import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, description, image, btnName }) => {

    return (
        <div>
            {title && <Cover
                image={image}
                title={title}
                description={description}
            />}
            <div className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-10'>
                <Link to={`/order/${title}`}>
                    <button className='btn bg-opacity-0 border-0 text-black border-b-black hover:text-white hover:bg-black  border-b-2'>{btnName}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;