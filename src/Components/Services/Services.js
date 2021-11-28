import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'

const Services = () => {
    const [serviceDetails, setServiceDetails]= useState([]);
    useEffect(()=>{
        fetch('./allServices.JSON')
        .then(res=> res.json())
        .then(data=> setServiceDetails(data))
    },[]);
    return (
        <div>
            <div className="service-header">
            <div>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.JoV7hipSPj1lR_XE1rVuwgHaBi&pid=Api&P=0&w=520&h=109"/>
                </div>
                <div>
                    <h2>We provide you the best service</h2>
                    <p>-worry Less, try your best- you are little bit closer to your dreams</p>
                </div>
                
            </div>
            
            <div>
            <Row xs={1} md={3} className="g-4">
               {
                //    all  services and details
                   serviceDetails.map( service => <ServiceDetail
                    key ={service.key}
                    service={service}></ServiceDetail>)
               }
            </Row>
            </div>
        </div>
    );
};

export default Services;