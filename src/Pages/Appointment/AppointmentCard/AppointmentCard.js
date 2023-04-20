import React, { useState } from 'react';
import './AppointmentCard.css';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentCard = ({option, selectedDate}) => {
    const {name, slots} = option;

    const [modalShow, setModalShow] =useState(false);

    return (
        <div className="col-md-4">
            <div className='appointment-card'>
                <h4>{name}</h4>
                <p>{slots[0]}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" :"space"} available</p>
                <button onClick={() => setModalShow(true)} className='btn btn-success text-light'>Book Now</button>
            </div>
                <BookingModal
                        option ={option}
                        selectedDate ={selectedDate}
                        show={modalShow}
                        setModalShow={setModalShow}
                        onHide={() => setModalShow(false)}
                        

                ></BookingModal>
        </div>
    );
};

export default AppointmentCard;