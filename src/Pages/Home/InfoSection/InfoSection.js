import React from 'react';
import { BsClockHistory} from 'react-icons/bs';
import { ImLocation2} from 'react-icons/im';
import { FiPhoneCall} from 'react-icons/fi';
import InfoCard from './InfoICard';



const InfoSection = () => {

    const infoText = [
        {
            icon: <BsClockHistory />,
            title: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            color: "#43A047"
        },
        {
            icon:  <ImLocation2 />,
            title: "Visit our location",
            description: "Lorem Ipsum is simply dummy text of the pri",
            color: "#2E7D32"
        },
        {
            icon: <FiPhoneCall /> ,
            title: "Contact us now",
            description: "Lorem Ipsum is simply dummy text of the pri",
            color: "#1B5E20"
        },
    ]

    return (
        <section>
            <div className="container">
                <div className='row g-3'>
                    {
                        infoText.map((info, index) => <InfoCard info={info} key={index} /> )
                    }
                </div> 
            </div>
        </section>
    );
};

export default InfoSection;

