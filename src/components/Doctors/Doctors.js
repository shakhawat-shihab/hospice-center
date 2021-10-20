import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctor from '../../Hooks/useDoctor';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const Doctors = () => {
    const { doctors } = useDoctor();
    return (
        <div className='mt-5 pt-5'>
            <div className=''>
                <h1 className='text-center fw-bold'>Our Doctors</h1>
                <Row xs={1} sm={2} md={3} lg={4} className="g-2 g-lg-3 mx-0 my-3">
                    {doctors.map(x => <DoctorsCard key={x.id} data={x}></DoctorsCard>)}
                </Row>
            </div>
        </div>
    );
};

export default Doctors;