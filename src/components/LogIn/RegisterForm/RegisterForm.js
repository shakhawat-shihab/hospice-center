import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import useAuth from '../../../Hooks/useAuth';
const RegisterForm = () => {
    const { createUserByEmailPassword } = useAuth();
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    function handlePasswordVisibility(val) {
        val === 'first' ? setVisible(!visible) : setVisible1(!visible1);
    }
    function handleCreateUserByEmailPassword() {

    }
    return (
        <div>
            {/* username */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="name" placeholder="User name" />
            </InputGroup>
            {/* email address */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="email" placeholder="Email Address" />
            </InputGroup>
            {/* password  */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="pass" placeholder="Password" />
                <InputGroup.Text className='bg-white' onClick={() => { handlePasswordVisibility('first') }} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
            </InputGroup>
            {/* reenter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible1 ? 'text' : 'password'} id="re-pass" placeholder="Reenter Password" />
                <InputGroup.Text className='bg-white' onClick={() => handlePasswordVisibility('second')} > {visible1 ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
            </InputGroup>
            {/* register button */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Agree to Terms & Cnditions" />
            </Form.Group>
            <button className='w-100 my-3 btn btn-outline-info fw-bold' onClick={handleCreateUserByEmailPassword}>
                Register
            </button>
        </div>
    );
};

export default RegisterForm;