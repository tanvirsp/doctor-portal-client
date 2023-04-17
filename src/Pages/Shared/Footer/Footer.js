import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
       <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h4>SERVICES</h4>
                    <ul>
                        <li>Emmergency Cleanup</li>
                        <li>Monthly Checkup</li>
                        <li>Weekly Checkup</li>
                        <li>Deep Cleanup</li>
                       
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>ORAL HEALTH</h4>
                    <ul>
                        <li>Fluoride Treatment</li>
                        <li>Cavity Filling</li>
                        <li>Teath Whitening</li>
            
                       
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>OUR ADDRESS</h4>
                    <p>New York - 101010 Hudson</p>
                    
                </div>
             
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className='text-center copy-right'>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        </div>
       </footer>
    );
};

export default Footer;