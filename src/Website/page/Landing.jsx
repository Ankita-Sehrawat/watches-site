import React from 'react';
import Navbar from '../component/Navbar';
import Trial from '../component/Trial';
import Cards from '../component/Cards';
import HeroSection from '../component/HeroSection';
import Category from '../component/Category';
import NewArrival from '../component/NewArrival';
import Collection from '../component/Collection';
import Login from '../component/Login';
import Testimonial from '../component/Testimonial';
import Footer from '../component/Footer';

const Landing = () => {
    return (
        <div>
            <HeroSection/>
            <Category/>
            <NewArrival/>
            <Collection/>
            <Login/>
            <Testimonial/>
            <Footer/>
            {/* <Trial />
            <Cards /> */}
        </div>
    );
};

export default Landing;