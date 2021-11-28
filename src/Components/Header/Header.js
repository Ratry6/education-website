import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle= {
        fontWeight : "bold",
        color : "darkcyan",
        
    }
    return (
       <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt=""
                    src="https://tse2.mm.bing.net/th?id=OIP.KYM4sr2hdiviXm6tIfkhOgHaE4&pid=Api&P=0&w=242&h=160"
                    width= "45"
                    height="40"
                    
                    
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>

            <nav className="header-part">
            <NavLink className="link"  activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className="link" activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink className="link" activeStyle={activeStyle} to="/services">Services</NavLink>
            <NavLink className="link"  activeStyle={activeStyle} to="/admission">Admission</NavLink>
        </nav>
            </Container>
       </Navbar>
    );
};

export default Header;