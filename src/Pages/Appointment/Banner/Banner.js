import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'

import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';


const Banner = ({selectedDate, setSelectedDate}) => {
 
    
    return (
        <section style={{padding: "100px 0px"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    required
                
                 />
                <p>You have selected: {format(selectedDate, 'PP')}</p>

                </div>
                <div className="col-md-6">
                    <div>
                        <img className="img-fluid" src={chair} alt="chair" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;