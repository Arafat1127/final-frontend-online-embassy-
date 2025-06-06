import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Explore from './Explore/Explore';
import WorldKey from './WorldKey/WorldKey';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Explore></Explore>
            <WorldKey></WorldKey>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;