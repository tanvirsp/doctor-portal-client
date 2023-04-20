import React from 'react';
import './AboutSection.css';
import image from '../../../assets/images/treatment.png'

const AboutSection = () => {
    return (
        <section>
            <div className="treatment-container">
                <div className="row ">
                    <div className="col-md-6">
                        <div>
                            <img className='img-fluid rounded ' src={image} alt="Treatment" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className='ps-5'>
                            <h2 className='mb-4'>Exceptional Dental Care, on Your Terms</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className='btn btn-success mt-4'>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default AboutSection;