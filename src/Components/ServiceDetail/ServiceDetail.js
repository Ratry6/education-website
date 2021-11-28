import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const {name, duration, img, timing, fees, seats, instructor} = props.service;
    return (
        <div>
            <Col>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-text">
            <h5>Duration : {duration}</h5>
            <h5>Timing : {timing}</h5>
            <h5>Fees : ${fees}</h5>
            <h5>Available Seats : {seats}</h5>
            <p>Instrucor : {instructor}</p>
            <Button className="join-btn">Join Course</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default ServiceDetail;