import React from 'react';
import appointment from '../../assets/images/doctor-small.png'
const Appointment = () => {
    return (
        <div class="hero min-h-screen bg-accent">
            <div class="hero-content flex-col lg:flex-row">
                <img src={appointment} />
                <div>
                    <h3 className='text-primary'>Appointment</h3>
                    <h1 class="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;