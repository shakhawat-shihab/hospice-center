import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const DoctorsCard = (props) => {
    const { id, name, photo, post } = props.data;
    const history = useHistory();
    function handleClick() {
        history.push(`/doctor/${id}`);
    }
    return (
        <Col>
            <Card className='h-100'>
                <div className='text-center'  >
                    <img src={photo} width='80%' className='rounded-circle' alt={name} />
                </div>
                <Card.Body>
                    <Card.Title className='fs-6'>{name}</Card.Title>
                    <Card.Text className=' fs-6 text-capitalize'>
                        <span className='ps-2'>-</span>
                        <small> {[post]}</small>
                    </Card.Text>
                </Card.Body>
                <div className='text-center'>
                    <button className='btn btn-primary mt-2 mb-3' onClick={handleClick}  >
                        <span className='ps-2'>Contact</span>
                    </button>
                </div>

            </Card>
        </Col>
    );
};

export default DoctorsCard;