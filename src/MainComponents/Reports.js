import React from 'react'
import Home_Top_reports from '../Components/Home_Top_reports'
import { Container, Row, Col } from 'react-bootstrap';
import './report.css';


export default function Reports() {
  const items = ['Total Number of destination 4', 'Most popular destination Bali', 'Total Number of Visitors 100'];


  return (
    <div>
     <Home_Top_reports />
     <Container>
      <Row>
      <div className="container-fluid">
      <div className="container-content">
        <h2>destination Overview</h2>
        <p>Ther is a Summery for the key information of Destination</p>
        <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Customer Feedback</h2>
        <p>Read what out Customer Say about their Experince</p>
      </div>
    </div>
  
      </Row>
      <Container>
        <div  className="container-fluid">
        <Row>
      <div className="centered-div">
      <p>We had the most remarkable family tour with Peter Sommer Travels. Not only everything was perfect, but we felt, in every instance, that our guides and our gulet crew truly cared about us, both the kids and adults, and did their best to make this trip memorable. For our well-traveled children (aged 9 and 6) this definitely has become the most eye-opening, adventurous, and stunning journey of their life - something they will remember, draw upon, and cherish for many years to come</p>
     <p><br/>- Johan doe</p>
    </div>
      </Row>
      <br/>
      <Row>
      <div className="centered-div">
      <p>We had the most remarkable family tour with Peter Sommer Travels. Not only everything was perfect, but we felt, in every instance, that our guides and our gulet crew truly cared about us, both the kids and adults, and did their best to make this trip memorable. For our well-traveled children (aged 9 and 6) this definitely has become the most eye-opening, adventurous, and stunning journey of their life - something they will remember, draw upon, and cherish for many years to come</p>
     <p><br/>- Johan Smith</p>
    </div>
      </Row>
      <div className='min-height'></div>
        </div>
      </Container>
   
     </Container>

  
    </div>
  )
}
