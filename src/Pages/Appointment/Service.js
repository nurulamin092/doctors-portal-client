import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Tray another</span>
                    }
                </p>
                <p>{slots.length} Available</p>
                <div className="card-actions justify-center">
                    <button className='btn btn-secondary' disabled={slots.length === 0}>Book Appointment</button>
                </div>
            </div>
        </div>

    );
};

export default Service;