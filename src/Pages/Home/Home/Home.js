import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import AboutSection from '../AboutSection/AboutSection';
import AppointmentSection from '../AppointmentSection/AppointmentSection';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <InfoSection />
            <Services />
            <AboutSection />
            <AppointmentSection />
            <Testimonial />
        </main>
    );
};

export default Home;