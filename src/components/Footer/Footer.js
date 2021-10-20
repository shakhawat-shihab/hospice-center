import React from 'react';
import './Footer.css';
import map from '../../../src/map.PNG'
const Footer = () => {
    return (
        <div >
            <div className='row g-5 m-0 pt-3 pb-4 px-2 px-sm-3 justify-content-around align-items-center bg-secondary'>
                <div className='col-md-4 col-sm-4 text-center'>
                    <h4 className='pb-2'>Location</h4>
                    <div >
                        <img src={map} alt="Google Map" width='70%' />
                    </div>

                </div>
                <div className='col-md-5 col-sm-5' id='contacts'>
                    <h4>Address</h4>
                    <div className='d-flex flex-column '>
                        <h5 className='my-2 fw-bold'>Hospice Center</h5>
                        <p className='mb-2'> <span className='fw-bold'>Address:</span>  Plot-7/2, Section-2, Mirpur, Dhaka-1216, Bangladesh</p>
                        <p className='mb-2'> <span className='fw-bold'>Phone Number:</span> 58054708-12</p>
                        <p className='mb-2'> <span className='fw-bold'>Fax:</span> 48039237 </p>
                        <p className='mb-2'><span className='fw-bold'>Email:</span>  admin@hospice.org.bd </p>
                    </div>
                </div>
            </div>
            <div className='bg-dark m-0 py-3'>
                <h5 className='text-center' style={{ color: '#abb7b7' }}> © 2021 - All Rights Reserved  @ Shakhawat Shihab</h5>
            </div>
        </div>
    );
};

export default Footer;