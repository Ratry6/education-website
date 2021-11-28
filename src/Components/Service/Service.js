import React from 'react';
import './Service.css';


const Service = (props) => {
    const {name, price,img}= props.service;
    const serviceStyle={
        border : '1px solid darkgray',
        borderRadius : '10px',
        padding: '10px',
        color: 'rgb(25, 25, 122)',
        margin:'10px'
    }
    return (
        <div style={serviceStyle}>
            <img className="image" src={img} alt="" />
            <h2>{name}</h2>
            <p>Cost : ${price}</p>
            
        </div>
    );
};

export default Service;