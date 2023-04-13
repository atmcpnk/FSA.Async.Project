// footer component
import React from 'react';

// footer includes copywrite year, and social media links
const Footer = () => {
    return (
        <div id='footer-container'>
            <footer id='footer'>
                {/* <p>Bloom Salon and Spa</p> */}
                <p id='copyright'>© 2023 Bloom Salon and Spa</p>
                <p id='copyright'>Follow us on social media!</p>
                <a href='https://www.facebook.com/profile.php?id=100049586094917' target='_blank' rel='noreferrer' id='social-media-links'>Facebook</a>
                <a href='https://www.instagram.com/bloomsalonspas/' target='_blank' rel='noreferrer' id='social-media-links'>Instagram</a>
                <a href='https://www.yelp.com/biz/bloom-salon-spa-long-beach-3' target='_blank' rel='noreferrer' id='social-media-links'>Yelp</a>
            </footer>
        </div>
    )
};

export default Footer;