import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {icon, title, des}  = service
    return (
        <div className='col-md-4'>
            <div className='service-card'>
                <img src={icon} alt={title} />
                <h4>{title}</h4>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default ServiceCard;