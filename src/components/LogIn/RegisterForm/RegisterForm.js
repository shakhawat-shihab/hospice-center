import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { ImInfo } from "react-icons/im";
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
const RegisterForm = () => {
    const { createUserByEmailPassword, setUser, updateProfileName } = useAuth();
    const [userValidity, setUserValidity] = useState(0);
    const [emailValidity, setEmailValidity] = useState(0);
    const [passwordValidity, setPasswordValidity] = useState(0);
    const [passwordValidity1, setPasswordValidity1] = useState(0);
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const history = useHistory();
    function handleCreateUserByEmailPassword() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('pass').value;
        // console.log(email, password);
        createUserByEmailPassword(email, password, name)
            .then(result => {
                const newUser = {
                    ...result.user,
                    displayName: name
                }
                setUser(newUser);
                updateProfileName(name);
                history.push('/home');
            })
    }
    function handlePasswordVisibility(val) {
        val === 'first' ? setVisible(!visible) : setVisible1(!visible1);
    }
    function testUserNameValidity(e) {
        e.target.value.length > 3 ? setUserValidity(1) : setUserValidity(-1);
    }
    function testEmailValidity(e) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(String(e.target.value).toLowerCase()) ? setEmailValidity(1) : setEmailValidity(-1);
    }
    function testPassswordValidity(e) {
        // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        re.test(e.target.value) ? setPasswordValidity(1) : setPasswordValidity(-1);
    }
    function testMatchPassswordValidity(e) {
        const rePass = document.getElementById('pass').value;
        // console.log('prvs', rePass);
        rePass === e.target.value ? setPasswordValidity1(1) : setPasswordValidity1(-1);
    }
    return (
        <div>
            {/* username */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="name" placeholder="User name" onChange={testUserNameValidity} />
                <div className='ps-1'>
                    {userValidity === 0 && <ImInfo className='h-100 fs-2 text-dark' />}
                    {userValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-2 text-success' />}
                    {userValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                </div>

            </InputGroup>
            {/* email address */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="email" placeholder="Email Address" onChange={testEmailValidity} />
                <div className='ps-1'>
                    {emailValidity === 0 && <ImInfo className='h-100 fs-2 text-dark' />}
                    {emailValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-2 text-success' />}
                    {emailValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                </div>
            </InputGroup>
            {/* password  */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="pass" placeholder="Password" onChange={testPassswordValidity} />
                <InputGroup.Text className='bg-white' onClick={() => { handlePasswordVisibility('first') }} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
                <div className='ps-1'>
                    {passwordValidity === 0 && <ImInfo className='h-100 fs-3 text-dark' />}
                    {passwordValidity === 1 && <BsFillCheckCircleFill className='h-100 fs-2 text-success' />}
                    {passwordValidity === -1 && <MdError className='h-100 fs-2 text-danger' />}
                </div>
            </InputGroup>
            {/* reenter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible1 ? 'text' : 'password'} id="re-pass" placeholder="Reenter Password" onChange={testMatchPassswordValidity} />
                <InputGroup.Text className='bg-white' onClick={() => handlePasswordVisibility('second')} > {visible1 ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
                <div className='ps-1'>
                    {passwordValidity1 === 0 && <ImInfo className='h-100 fs-3 text-dark' />}
                    {passwordValidity1 === 1 && <BsFillCheckCircleFill className='h-100 fs-2 text-success' />}
                    {passwordValidity1 === -1 && <MdError className='h-100 fs-2 text-danger' />}
                </div>
            </InputGroup>
            {/* register button */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree to Terms & Cnditions" required />
            </Form.Group>
            <button className='w-100 my-3 btn btn-outline-info fw-bold' onClick={handleCreateUserByEmailPassword}>
                Register
            </button>
        </div>
    );
};

export default RegisterForm;