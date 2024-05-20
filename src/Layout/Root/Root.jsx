import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Router/Pages/Shared/Footer/Footer';
import Navbar from '../../Router/Pages/Shared/Navbar/Navbar';

const Root = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            {
                noHeaderFooter || <Navbar></Navbar> 
            }
            <Outlet></Outlet>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;