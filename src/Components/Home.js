// HomePage.js
import React from 'react';
import Card from '../CustomComponents/Card'; 
import data from '../CustomComponents/data.json'; 
import './home.css';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
