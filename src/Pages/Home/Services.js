import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: '',
            img: fluoride

        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            img: cavity

        },
        {
            _id: 1,
            name: "Teeth Whitening ",
            description: '',
            img: whitening

        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center uppercase'>
                <h3 className='text-primary  font-bold  '>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;