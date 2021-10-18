import React from 'react';
import banner from '../../../banner.webp';
import './Banner.css'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${banner})` }} className='banner-pos' >
            <div className='h-100 row m-0 px-3 px-md-5 '>
                <div className='col-lg-7 col-md-8 col-sm-9 col-12 d-flex flex-column justify-content-center pt-2 pt-sm-0'>
                    <h1 className='heading pt-5 pt-sm-0 '>We Care for Your Health <br />
                        Every Moment</h1>
                    <p className='txt fs-4'>Be a member of our organization, enjoy free health service for your lifetime and 20% discount on your family member's treatment.
                    </p>
                    <button className='btn button-design'>Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;