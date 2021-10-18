import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { ServiceContext } from '../../context/ServiceProvider';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const { services } = useContext(ServiceContext);
    return (
        <div className='mt-5 pt-5'>
            <div className=''>
                <h1 className='text-center fw-bold'>Our Services</h1>
                <Row xs={1} sm={2} md={3} lg={4} className="g-2 g-lg-3 mx-0 my-3">
                    {services.map(x => <ServiceCard key={x.id} data={x}></ServiceCard>)}
                </Row>
            </div>
        </div>
    );
};

export default Services;