import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../../../Hooks/useCart';


const Navbar = () => {

    const { user, signOutSystem } = useContext(AuthContext)
    const [cart] = useCart()

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salads">Order Food</NavLink></li>
        <li><NavLink to="/dashboard/cart">DashBoard</NavLink></li>

    </>

    const handleLogOutSystem = () => {
        signOutSystem()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="navbar fixed p-5 bg-opacity-30 bg-black max-w-screen-xl z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div>
                {
                    user ? <>
                        <Link>
                            <div className='relative mx-5'>
                                <FaCartPlus className='text-2xl' />
                                <span className='absolute bottom-6 rounded-full px-2 right-3 bg-red-500'>+{cart.length}</span>
                            </div>
                        </Link>
                        <button onClick={handleLogOutSystem} className='btn'>LogOut</button>
                    </>
                        : <Link to="/login">
                            <a className="btn">Login</a>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;