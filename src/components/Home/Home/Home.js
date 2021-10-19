import React from 'react';
import Banner from '../Banner/Banner';
import DoctorsDemo from '../DoctorsDemo/DoctorsDemo';
import ServicesDemo from '../ServicesDemo/ServicesDemo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesDemo></ServicesDemo>
            <DoctorsDemo></DoctorsDemo>
        </div>
    );
};

export default Home;