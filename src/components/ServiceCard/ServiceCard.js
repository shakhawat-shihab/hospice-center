import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { AiFillTags } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useHistory } from 'react-router';
const ServiceCard = (props) => {
    const history = useHistory();
    const { id, service, cost, type, image } = props.data;
    function handlePayment() {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className='h-100'>
                <div className='text-center'  >
                    <img src={image} width='100%' height='200px' className='rounded' alt={service} />
                </div>
                <Card.Body>
                    <Card.Title className='fs-4'>{service}</Card.Title>
                    <Card.Text className=' fs-5 text-capitalize'>
                        <AiFillTags className='text-info' />
                        <span className='ps-2'> {type}</span>
                    </Card.Text>
                    <Card.Text className=' fs-5 '>
                        Cost :
                        <span className='text-warning' > {cost} ৳</span>
                    </Card.Text>
                </Card.Body>
                <div className='text-center'>
                    <button className='btn btn-primary mt-2 mb-3' onClick={handlePayment}  >
                        <ImInfo className=' fs-5' />
                        <span className='ps-2'>View Details</span>
                    </button>
                </div>

            </Card>
        </Col>
    );
};

export default ServiceCard;