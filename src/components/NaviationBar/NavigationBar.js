import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo_name from '../../logo_name.png';
import './NavigationBar.css';
const NavigationBar = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    const onChangeHeader = () => {
        // console.log('y =', window.scrollY)
        if (window.scrollY >= 75) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };
    //trigger when scroll is done
    window.addEventListener('scroll', onChangeHeader);
    return (
        <div >
            <Navbar collapseOnSelect expand="md" variant="light" fixed='top'
                className={'px-3 px-md-5 ' + (changeHeader ? 'bg-nav ' : 'bg-trans ')}
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home'>
                    <img src={logo_name} alt="Hospice logo" width='140px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/services' activeClassName="selected" className='link-style ' >
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/doctors' activeClassName="selected" className='link-style ' >
                            Doctors
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to='/home#contacts' activeClassName="selected" className='link-style' >
                            Contact
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/login' activeClassName="selected" className='link-style' >
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default NavigationBar;