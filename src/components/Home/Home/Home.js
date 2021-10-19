import React from 'react';
import Feedback from '../../Feedback/Feedback';
import Banner from '../Banner/Banner';
import DoctorsDemo from '../DoctorsDemo/DoctorsDemo';
import ServicesDemo from '../ServicesDemo/ServicesDemo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesDemo></ServicesDemo>
            <DoctorsDemo></DoctorsDemo>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;