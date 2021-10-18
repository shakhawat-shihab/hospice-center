import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from '../LogInForm/LogInForm';
import { FcGoogle } from "react-icons/fc";
import './LogIn.css'
import useAuth from '../../../Hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='mt-5 pt-5 mb-4'>
            <div className='p-sm-5 px-3 py-4 bg-white rounded shadow mx-auto container-of-form' >
                <LogInForm></LogInForm>
                <div className='text-center my-2'>
                    <Link to='/register' className=' text-center'>Need an account?</Link>
                </div>
                <hr />
                <p className='text-secondary text-center' > OR </p>
                <button className='w-100 my-3 btn btn-outline-info fw-bold ' onClick={signInUsingGoogle} >
                    <span className=' me-2'>
                        <FcGoogle className='fs-3' />
                    </span>
                    Sign In Using Google
                </button>
            </div>
        </div>
    );
};

export default LogIn;