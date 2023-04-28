// contact component
import React from 'react';
import Footer from './Footer';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(form.current.reportValidity()) {
        emailjs.sendForm('service_kv70eut', 'template_j4e3fxr', form.current, 'D6cgMdknCYGEvCsQh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        }else{
            alert('Please fill out all required fields');
        }
    };

    return (
        <>
            <div id='contact-container'>
                <h1>Contact Us!</h1>
                {/* <h3>Set an appointment with us today!</h3>
                <p>Phone: 555-555-5555</p>
                <p>Email: email@email.com</p> */}
                {/* <img src='https://c8.alamy.com/comp/HFAF1N/usa-south-carolina-charleston-pink-dot-beauty-bar-parlor-parlour-salon-HFAF1N.jpg' alt='salon' id='salon-outside-pic' /> */}
                <h3>Send Us a Message Here!</h3>
                <form ref={form} onSubmit={sendEmail} id='contact-form' noValidate>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' required />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' required />
                    <label htmlFor='phone'>Phone:</label>
                    <input type='tel' id='phone' name='phone' pattern='^\d{10}$' title='Please enter a valid 10-digit phone number' required/>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' required />
                    <button type='submit'>Submit Message</button>
                </form>
                <img src='https://c8.alamy.com/comp/HFAF1N/usa-south-carolina-charleston-pink-dot-beauty-bar-parlor-parlour-salon-HFAF1N.jpg' alt='salon' id='salon-outside-pic' />
            </div>
            <Footer id='footer' />
        </>
    )
};

export default Contact;