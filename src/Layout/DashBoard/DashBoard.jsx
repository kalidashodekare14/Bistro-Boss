import React from 'react';
import { FaAd, FaBars, FaBook, FaHome, FaList, FaUser, FaUtensils } from 'react-icons/fa';
import { FaCalendar, FaMessage, FaShop } from 'react-icons/fa6';
import { LuBaggageClaim } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {


    const [isAdmin] = useAdmin()

    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-[#d1a054]">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/admin-home">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-item">
                                    <FaUtensils></FaUtensils>
                                    Add Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-item">
                                    <FaList />
                                    Manage Item
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-bookings">
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/all-users">
                                    <FaUser />
                                    All Users
                                </NavLink>
                            </li>

                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/user_home">
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <LuBaggageClaim />
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <MdOutlineShoppingCart />
                                        My Cart
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <VscPreview />
                                        Add Review
                                    </NavLink>
                                </li>

                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaBars></FaBars>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/:category">
                            <FaShop></FaShop>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/:category">
                            <FaMessage></FaMessage>
                            Contect Us
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className='flex-1 flex justify-center my-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;