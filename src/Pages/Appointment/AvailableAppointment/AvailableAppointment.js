import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';


const AvailableAppointment = ({selectedDate}) => {
    const [appointmentDate, setAppointmentDate] = useState([]);
    
   

    useEffect(()=>{
        fetch("appointmentOptions.json")
        .then(res => res.json())
        .then(data => setAppointmentDate(data))
    } ,[])

    return (
        <section>
            <div className="container">
                <h4 className='text-center text-success'>You have selected: {format(selectedDate, 'PP')}</h4>
                <div className="row">
                    {
                        appointmentDate.map(option => <AppointmentCard selectedDate={selectedDate} key={option._id} option={option}></AppointmentCard>)
                    }
                </div>
                
            </div>
           
           
          
        </section>
    );
};

export default AvailableAppointment;