// services component
import React from 'react';

const Services = () => {
    return (
        <>
            <div>
                <main id='services-container'>
                    <h1>Our Services</h1>
                    <p>below are all services offered at their starting rate, prices may vary depending on multiple factors
                        for any questions feel free to contact us!
                    </p>
                </main>
                <aside id='services-list-left'>
                    <h3>Hair</h3>
                    <ul>
                        <li>Haircut: $40</li>
                        <li>Coloring: $60</li>
                        <li>Highlights: $80</li>
                    </ul>
                </aside>
                <aside id='services-list-right'>
                    <h3>Treatments</h3>
                    <ul>
                        <li>Facial: $50</li>
                        <li>Manicure: $30</li>
                        <li>Pedicure: $40</li>
                    </ul>
                </aside>
                {/* images here of hair examples */}
                <img src='https://media.istockphoto.com/id/1147811403/photo/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-to-the-mirror.jpg?s=1024x1024&w=is&k=20&c=w-AdYfdj891KLQmZZ0UV8KldN0slqr4di8v5o8WmYFo=' alt='hair-example' />
                <p>contact us to schedule your appointment!</p>
                {/* add a button to the contact page here */}
            </div>
        </>
    )
};

export default Services;