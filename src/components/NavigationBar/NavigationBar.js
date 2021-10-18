import React, { useState } from 'react';
import { Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo_name from '../../logo_name.png';
import './NavigationBar.css';
import demoProfile from '../../profile.png';
import useAuth from '../../Hooks/useAuth';
const NavigationBar = () => {
    const { user } = useAuth();
    const [changeHeader, setChangeHeader] = useState(false);
    let { pathname } = useLocation();
    if (pathname === '/') {
        pathname = '/home';
    }
    //console.log('location.pathname :', pathname);
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
        <div id='top' >
            <Navbar collapseOnSelect expand="md" variant="light" fixed='top'
                className={'px-3 px-md-5 py-3 ' + (pathname !== '/home' ? 'bg-nav ' : (changeHeader ? 'bg-nav ' : 'bg-trans '))}
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home'>
                    <img src={logo_name} alt="Hospice logo" width='140px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavHashLink} to='/home#top' activeClassName="selected" className='link-style ' >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/services' activeClassName="selected" className='link-style ' >
                            Services
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/doctors' activeClassName="selected" className='link-style ' >
                            Doctors
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to='/home#contacts' activeClassName="selected" className='link-style' >
                            Contact
                        </Nav.Link>
                        {
                            (user.displayName || user.email)
                                ?
                                <Nav.Link as={NavLink} to='/login' activeClassName="selected" className='link-style special-link-style' >
                                    <OverlayTrigger placement='bottom-end' overlay={<Tooltip id="tooltip-disabled">Log In</Tooltip>}>
                                        <div className='h-100 d-flex align-items-center'>
                                            <img src={demoProfile} alt="" width='55px' height='40px' />
                                        </div>
                                    </OverlayTrigger>
                                </Nav.Link>
                                :
                                <Nav.Link as={NavLink} to='/home' activeClassName="selected" className='link-style special-link-style' >

                                    <div className='h-100 d-flex align-items-center'>
                                        <img src={demoProfile} alt="" width='55px' height='40px' />
                                    </div>

                                </Nav.Link>

                        }

                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default NavigationBar;