// footer component
import React from 'react';

// footer includes copywrite year, and social media links
const Footer = () => {
    return (
        <div>
            <footer>
                {/* <p>Bloom Salon and Spa</p> */}
                <p>© 2023 Bloom Salon and Spa</p>
                <p>Follow us on social media!</p>
                <a href='https://www.facebook.com/profile.php?id=100049586094917' target='_blank' rel='noreferrer'>Facebook</a>
                <a href='https://www.instagram.com/bloomsalonspas/' target='_blank' rel='noreferrer'>Instagram</a>
                <a href='https://www.yelp.com/biz/bloom-salon-spa-long-beach-3' target='_blank' rel='noreferrer'>Yelp</a>
            </footer>
        </div>
    )
};

export default Footer;