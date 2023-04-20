import React from "react";
import './InfoSection.css'

const InfoCard = ({ info }) => {
  const { icon, title, description, color } = info;
  return (
    <div className="col-md-4">
      <div className="d-flex align-items-center info-card"
        style={{ backgroundColor: color }}>
        <div>
            {icon}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
