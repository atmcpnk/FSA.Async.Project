// contact component
import React from 'react';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <div id='contact-container'>
                <h1>Contact Us!</h1>
                <h3>Set an appointment with us today!</h3>
                <p>Phone: 555-555-5555</p>
                <p>Email: email@email.com</p>
                {/* insert an image of the salon here from the images folder, unk issue, can't get the photos to render from file*/}
                <img src='https://c8.alamy.com/comp/HFAF1N/usa-south-carolina-charleston-pink-dot-beauty-bar-parlor-parlour-salon-HFAF1N.jpg' alt='salon' id='salon-outside-pic'/>
                <h3>Or Send Us a Request Here!</h3>
                <form id='contact-form'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' />
                    <label htmlFor='phone'>Phone:</label>
                    <input type='tel' id='phone' name='phone' />
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <Footer id='footer'/>
        </>
    )
};

export default Contact;