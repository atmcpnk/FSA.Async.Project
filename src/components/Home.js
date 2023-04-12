// Home component, will serve simply as the Home Page for the site
import React from 'react';

const Home = () => {
    return (
        <>
            <div>
                <main id='home-container'>
                    <h1>Welcome to Bloom Salon and Spa!</h1>
                    {/* image of interior seats here  */}
                    <h3>About Bloom Salon and Spa</h3>
                    <p>Bloom Salon and Spa is a full service salon and spa located in the Zaferia District of Long Beach, California. 
                        We offer a wide range of services including haircuts, hair color, hair styling, hair extensions, hair treatments, facials, waxing, manicures, pedicures, and massage. 
                        We also offer a full line of professional hair and skin care products for sale. We are open 7 days a week and offer extended hours to accommodate our clients busy schedules. 
                        We look forward to seeing you soon!</p>
                    {/* image of interior from the perspective of entry door */}
                    {/* link to contact page*/}
                </main>
                {/* NavLink to footer */}
            </div>
        </>
    )
};

export default Home;