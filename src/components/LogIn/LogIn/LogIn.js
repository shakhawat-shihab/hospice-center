import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from '../LogInForm/LogInForm';
import { FcGoogle } from "react-icons/fc";
import './LogIn.css'
import useAuth from '../../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';
import swal from 'sweetalert';
const LogIn = () => {
    window.scrollTo(0, 0);
    const { user, setUser, setError, signInUsingGoogle, isLoading, setIsLoading, signInUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    if (user.displayName || user.email) {
        history.push('./home')
    }
    // PrivateRouter er ‘location.state.from’ te kon directory teke astase seta thake
    const redirect_uri = location.state?.from || '/home';
    // console.log('came from :', redirect_uri);
    function handleSignInUsingGoogle() {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
                swal({
                    title: "You are Successfully Logged In!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
                swal({
                    title: error.message,
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                })
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    function handleLogIn(email, password) {
        // console.log('email :', email, 'password ', password);
        signInUser(email, password)
            .then(res => {
                // console.log('success');
                setUser(res.user);
                history.push(redirect_uri);
                swal({
                    title: "You are Successfully Logged In!",
                    icon: "success",
                    button: "Ok",
                });
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
                swal({
                    title: "Please Check Your Email or Password",
                    text: error.message,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
            })
            .finally(() => {
                setIsLoading(false);
            })

        // .then(res => {
        //     console.log('INSIDE');
        //     setUser(res.user);
        //     history.push(redirect_uri);
        // })
        // .catch(error => {
        //     //setError(error.message);
        // })
        // .finally(() => {
        //     setIsLoading(false);
        //     console.log('INSIDE fINALLY');
        // })
    }
    if (isLoading) {
        return (
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
        )
    }
    else {
        return (
            <div className='mt-5 pt-5 mb-4'>
                <div className='p-sm-5 px-3 py-4 bg-white rounded shadow mx-auto container-of-form' >
                    <LogInForm clickHandler={handleLogIn} ></LogInForm>
                    <div className='text-center my-2'>
                        <Link to='/register' className=' text-center'>Need an account?</Link>
                    </div>
                    <hr />
                    <p className='text-secondary text-center' > OR </p>
                    <button className='w-100 my-3 btn btn-outline-info fw-bold ' onClick={handleSignInUsingGoogle} >
                        <span className=' me-2'>
                            <FcGoogle className='fs-3' />
                        </span>
                        Sign In Using Google
                    </button>
                </div>
            </div>
        );
    }
};

export default LogIn;