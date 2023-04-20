import React from 'react';
import './Services.css';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = [
        {
            icon: cavity,
            title: "Fluoride Treatment",
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            icon: fluoride,
            title: "Cavity Filling",
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            icon: whitening,
            title: "Teeth Whitening",
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        
    ]

    return (
        <section className='service-section'>
            <div className="container">
                <div className='section-titile mb-5'>
                    <h4>OUR SERVICES</h4>
                    <h3>Services We Provide</h3>
                </div>
                <div className="row">
                    {
                        services.map( (service, index) => <ServiceCard service={service} key={index}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;