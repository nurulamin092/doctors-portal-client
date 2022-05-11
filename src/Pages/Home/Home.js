import React from 'react';
import Banner from './Banner';
import Treatment from './Treatment';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import Contract from './Contract';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;