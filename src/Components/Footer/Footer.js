import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';;


const Footer = () => {
    return (
        <div className="footer--part">
             <h2>NewsLetter</h2>
            <input className="input-text" type="text" placeholder="Enter your E-mail Address"/> 
            <Button className="btn-subscribe">Subscribe</Button>
            <hr></hr>
            <div className="contact">
            <h3>Contact us</h3>
            <p>Address : Dhaka,Bangladesh</p>
            <p>Email : elearning@gmail.com</p>

            </div>
        </div>
    );
};

export default Footer;