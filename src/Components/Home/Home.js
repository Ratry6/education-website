import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('./coreservices.JSON')
        .then(res => res.json())
        .then(data=> setServices(data));
    },[]);
    return(
        <div>
            <div className="head-part">
            <h1>Learn with us</h1>
            <h3>Elevating learning with intelligent textbooks</h3>
            <p>It is an award-winning digital publisher which combines the power of technology and textbooks</p>
            </div>
           
            
            <div className="service-part">
                    <h1>Our  {services.length} Core Services</h1>
                    
                    <div className="individual-service">
                    { 
                    // core services
                        services.map(service => <Service 
                            key= {service.key}
                            service={service}></Service>)
                    }
                    </div>
            </div>
            
        </div>
   
    );
          
           
 
}



export default Home;