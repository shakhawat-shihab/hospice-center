import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo_name from '../../logo_name.png';
import './NavigationBar.css';
import demoProfile from '../../profile.png';
import useAuth from '../../Hooks/useAuth';
import { GrEdit, GrPerformance } from "react-icons/gr";
import { GoSignOut } from "react-icons/go";
const NavigationBar = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    const [changeHeader, setChangeHeader] = useState(false);
    let { pathname } = useLocation();
    if (pathname === '/') {
        pathname = '/home';
    }
    const scrollOccured = () => {
        // console.log('y =', window.scrollY)
        if (window.scrollY >= 75) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };
    // trigger when scroll is done
    window.addEventListener('scroll', scrollOccured);

    return (
        <div id='top' >
            <Navbar collapseOnSelect expand="md" variant="light" fixed='top'
                className={'px-3 px-md-5 py-3 ' + (pathname !== '/home' ? 'bg-nav ' : (changeHeader ? 'bg-nav ' : 'bg-trans '))}
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home'>
                    <img src={logo_name} alt="Hospice logo" width='135px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavHashLink} to='/home#top' activeClassName="selected"  >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavHashLink} to='/services' activeClassName="selected"  >
                            Services
                        </Nav.Link>
                        {/* <Nav.Link as={NavLink} to='/doctors' activeClassName="selected"  >
                            Doctors
                        </Nav.Link> */}
                        <Nav.Link as={NavHashLink} to='/home#contacts' activeClassName="selected"  >
                            Contact
                        </Nav.Link>
                        {
                            (user.displayName || user.email)
                                ?
                                <NavDropdown title={
                                    <div className='h-100 d-flex align-items-center  '>
                                        <img src={user.photoURL} alt="" width='55px' height='40px' className='rounded-circle ' />
                                    </div>
                                }
                                    id="collasible-nav-dropdown" >
                                    <NavDropdown.Item as={NavLink} to='/profile' activeClassName="selected" >
                                        <GrEdit />
                                        <span className='ps-2'> {user.displayName.substr(0, user.displayName.indexOf(' '))} </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to='/settings' activeClassName="selected"  >
                                        <GrPerformance />
                                        <span className='ps-2'> Setttings </span>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={NavLink} to='/login' activeClassName="selected" onClick={logOut}  >
                                        <GoSignOut />
                                        <span className='ps-2'> Log Out </span>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link as={NavLink} to='/login' activeClassName="selected" className='special-link-style ' >
                                    <OverlayTrigger placement='bottom-end' overlay={<Tooltip id="tooltip-disabled">Log In</Tooltip>}>
                                        <div className='h-100 d-flex align-items-center'>
                                            <img src={demoProfile} alt="" width='55px' height='40px' />
                                        </div>
                                    </OverlayTrigger>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar >
        </div >
    );
};

export default NavigationBar;