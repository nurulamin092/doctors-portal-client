import React from 'react';
import Banner from './Banner';
import Treatment from './Treatment';
import Info from './Info';
import Services from './Services';
import Appointment from './Appointment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;