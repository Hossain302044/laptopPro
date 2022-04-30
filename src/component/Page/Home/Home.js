import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;