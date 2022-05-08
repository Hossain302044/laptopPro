import React from 'react';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </div>
    );
};

export default Home;