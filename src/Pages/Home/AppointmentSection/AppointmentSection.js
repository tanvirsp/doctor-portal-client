import React from 'react';
import './AppointmentSection.css';
import doctor  from '../../../assets/images/doctor-small.png'

const AppointmentSection = () => {
    return (
        <section className='appointment-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className='doctor-image'>
                            <img className='img-fluid' src={doctor} alt="doctor" />
                        </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center p-5">
                        <div>
                            <h5 className='text-info'>Appointment</h5>
                            <h3 className='display-6 text-light'>Make an appointment Today</h3>
                            <p className='text-light'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className='btn btn-info mt-4'>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;