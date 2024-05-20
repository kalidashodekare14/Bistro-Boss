import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drink'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    console.log(category)
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')


    console.log(menu)

    return (
        <div className=''>
            <Helmet>
                <title>Bestro Boss | Order</title>
            </Helmet>
            <Cover image={orderImg} title={"OUR SHOP"} description={"Would you like to try a dish?"} />
            <Tabs className="mb-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salads} />
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soups} />
                </TabPanel>
                <TabPanel>
                    <OrderTab item={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;