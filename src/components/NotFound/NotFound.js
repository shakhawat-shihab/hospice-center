import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notFound1 from '../../../src/not-found-1.png';
const NotFound = () => {
    return (
        <div className='not-found mt-3 px-2' style={{ backgroundImage: `url(${notFound1})` }}  >
            <h1 className='header-404 mb-2 text-danger'>404 </h1>
            <h2 className='header-not-found mb-3 text-danger'>Page not found</h2>
            <h3 className='header-not-found mt-3'>Go Back To
                <Link to='/home' className=' text-info'> Home Page</Link>
            </h3>
        </div>
    );
};

export default NotFound;