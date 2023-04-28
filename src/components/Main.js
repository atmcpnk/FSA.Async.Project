import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';
import LoginForm from './LoginForm';
import Account from './Account';
import { useEffect } from 'react';

// entry point for all component routes 

const Main = () => {

    // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    // const dispatch = useDispatch();

    // useEffect (() => {}, []);

    return (
        <>
            <div id='nav-bar-ctr'>
                <nav id='nav-bar'>
                    <h1 id='nav-bar-title'>Bloom Salon and Spa</h1>
                    {/* add NavLinks here for Home Page, Services, About Us, Contact */}
                    <NavLink to="/" id='nav-links'>Home</NavLink>
                    <NavLink to="/services" id='nav-links'>Services</NavLink>
                    <NavLink to="/about-us" id='nav-links'>About Us</NavLink>
                    <NavLink to="/contact" id='nav-links'>Contact</NavLink>
                    <NavLink to="/login" id="nav-links">Login</NavLink>
                </nav>
                {/* add routes here for each of the above, Home, Services, About us, Contact*/}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<LoginForm />} />
                </Routes>
            </div>
        </>
    );
}

export default Main;

//remember to import each component into this file (top of file)