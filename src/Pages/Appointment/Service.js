import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
    return (

        <div class="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.slots}</p>
                <div class="card-actions justify-center">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Service;