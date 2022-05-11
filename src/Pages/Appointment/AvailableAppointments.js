import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            <h3>Available Appointment on {format(date, 'PP')}</h3>
        </div>
    );
};

export default AvailableAppointments;