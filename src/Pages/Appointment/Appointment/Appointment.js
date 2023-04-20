import React, { useState } from 'react';
import './Appointment.css';
import Banner from '../Banner/Banner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState( new Date());
 
   
    return (
        <>
            <Banner 
                selectedDate={selectedDate} 
                setSelectedDate ={setSelectedDate} 
            />
            <AvailableAppointment
                selectedDate={selectedDate}     
            />
             
        </>
    );
};

export default Appointment;