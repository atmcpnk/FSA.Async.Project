// Home component, will serve simply as the Home Page for the site
import React from 'react';
import Footer from './Footer.js';

const Home = () => {
    return (
        <>
            <div>
                <main id='home-container'>
                    <h1>Welcome to Bloom Salon and Spa!</h1>
                    {/* image of interior seats here  */}
                    <img src='https://t4.ftcdn.net/jpg/01/81/61/29/360_F_181612908_uiOH8a4qWiNGuGS2Pg5dgwUIKJZ0C02w.jpg' alt='salon-interior' id='salon-interior-pic'/>
                    <h2>About Bloom Salon and Spa</h2>
                    <p id='home-bio'>Bloom Salon and Spa is a full service salon and spa located in the Zaferia District of Long Beach, California. 
                        We offer a wide range of services including haircuts, hair color, hair styling, hair extensions, hair treatments, facials, waxing, manicures, pedicures, and massage. 
                        We also offer a full line of professional hair and skin care products for sale. We are open 7 days a week and offer extended hours to accommodate our clients busy schedules. 
                        We look forward to seeing you soon!</p>
                    {/* image of interior from the perspective of entry door */}
                    <img src='https://st2.depositphotos.com/1004176/9345/i/600/depositphotos_93457106-stock-photo-luxury-beauty-salon.jpg' alt='salon-seats' id='salon-shower-pic'/>
                    {/* link to contact page*/}
                </main>
                {/* NavLink to footer */}
                <Footer id='footer'/>
            </div>
        </>
    )
};

export default Home;