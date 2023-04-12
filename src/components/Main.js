import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';

// entry point for all component routes 

const Main = () => {
    return (
        <>
            <div>
                <nav id='nav-bar'>
                    <h1>Bloom Salon and Spa</h1>
                    {/* add NavLinks here for Home Page, Services, About Us, Our Team, Contact */}
                    <NavLink to="/" id='nav-links'>Home</NavLink>
                </nav>
                {/* add routes here for each of the above, Home, Services, About us, Our Team, Contact*/}
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default Main;

//remember to import each component into this file (top of file)