import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';



const Card = ({ id, title, description, imageUrl }) => {

  return (
    <div className="card">
     <img
        src={imageUrl}
        alt="Card Image"
        className="card-image"
      />
      <div className="card-body">
        <h5 className="card-title mt-1">{title}</h5>
        <p className="card-text mt-1">{description}</p>
        <Link to={`/destination/${id}`} className="btn btn-primary mt-1">
          Leader More
        </Link>
      </div>
    </div>
  );
};

export default Card;
