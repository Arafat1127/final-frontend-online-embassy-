import React from 'react';
import logo from '../../../assets/images/logo.png';
// import logo from '../../../assets/images/embassy-logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const menuItems = (
        <React.Fragment>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/visa'>Visa</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>

        </React.Fragment>
    )

    return (
        <div className="navbar bg-white fixed top-0 left-0 right-0 z-50  shadow-sm h-[70px] px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="h-[px] w-[200px]"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;