import React from 'react';
import './Testimonial.css';
import people1  from '../../../assets/images/people1.png';
import people2  from '../../../assets/images/people2.png';
import people3  from '../../../assets/images/people3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';


const Testimonial = () => {

    const testimonialText = [
        {
            pic: people1,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            pic: people2,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            pic: people3,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            pic: people1,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            pic: people2,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            pic: people1,
            clientName: "Winson Herry",
            address: "California",
            text : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='testimonial-title'>
                            <h4>Testimonial</h4>
                            <h3 className='display-6'>What Our Patients Says</h3>
                        </div>
                    </div>
                </div>
                {/* Slider section */}

                <div className="row">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                        modules={[Autoplay, Navigation]}
            
                    >

                        {
                            testimonialText.map( (info, index)=>{  
                                return(                        
                                    <SwiperSlide info ={info} key={index}>
                                        <div className='review'>
                                            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                                            <div className='d-flex align-items-center'>
                                                <div className='client-image'>
                                                    <img src={info.pic} alt="People" />
                                                </div>
                                                <div className='client-info'>
                                                    <h5>Winson Herry</h5>
                                                    <p>California</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        
                      
                    </Swiper>

                    {/* Slider Nagivation */}
                    <div className='review-nav-bar'>
                        <span className='button-prev'><FiArrowLeft /></span>
                        <span className='button-next'> <FiArrowRight/></span>
                        
                        
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Testimonial;