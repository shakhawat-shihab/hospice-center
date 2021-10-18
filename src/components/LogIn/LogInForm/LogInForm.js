import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { BiShow, BiHide } from "react-icons/bi";
import './LogInForm.css';
const LogInForm = () => {
    const [visible, setVisible] = useState(false);
    function handlePasswordVisibility() {
        console.log('clicked');
        setVisible(!visible);
    }
    return (
        <div >
            {/* enter email */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" id="inlineFormInputGroup" placeholder="Email" />
            </InputGroup>
            {/* enter password */}
            <InputGroup className="mb-2">
                <Form.Control size="lg" className='input-design' type={visible ? 'text' : 'password'} id="inlineFormInputGroup" placeholder="Password" />
                <InputGroup.Text className='bg-white' onClick={handlePasswordVisibility} > {visible ? <BiShow className='fs-4' /> : <BiHide className='fs-4' />}</InputGroup.Text>
            </InputGroup>
            {/* enter login */}
            <Form.Group className="my-3 " controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep Me logged in" />
            </Form.Group>
            <button className='w-100 my-3 btn log-in-button-design '>
                Log In
            </button>
        </div>
    );
};

export default LogInForm;