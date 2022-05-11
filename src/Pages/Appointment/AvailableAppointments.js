import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div>
            <h3 className='text-secondary text-center text-xl font-bold'>Available Appointment on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;