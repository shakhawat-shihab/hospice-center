import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { AiFillTags } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useHistory } from 'react-router';
import './ServiceCard.css';
const ServiceCard = (props) => {
    const history = useHistory();
    const { id, service, cost, type, image, description } = props.data;
    function handleClick() {
        history.push(`/service/${id}`);
    }
    return (
        <Col>
            <Card className='h-100 service '>
                <div className='text-center'  >
                    <img src={image} width='100%' height='200px' className=' service-img ' alt={service} />
                </div>
                <Card.Body>
                    <Card.Title className='fs-4'>{service}</Card.Title>
                    <Card.Text className=' fs-5 text-capitalize'>
                        <AiFillTags className='text-info' />
                        <span className='ps-2'> {type}</span>
                    </Card.Text>
                    <Card.Text className=' fs-6 '>
                        {description.slice(0, 110).concat(' ...')}
                    </Card.Text>
                </Card.Body>
                <Card.Text className=' fs-5 px-3'>
                    Cost :
                    <span className='text-warning ' > {cost} ৳</span>
                </Card.Text>
                <div className='text-center'>
                    <button className='btn btn-primary mt-2 mb-3' onClick={handleClick}  >
                        <ImInfo className=' text-warning fs-5' />
                        <span className='ps-2'>View Details</span>
                    </button>
                </div>

            </Card>
        </Col>
    );
};

export default ServiceCard;