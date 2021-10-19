import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DoctorsCard from '../../DoctorsCard/DoctorsCard';

const DoctorsDemo = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(resp => resp.json())
            .then(json => setDoctors(json))
    }, [])
    return (
        <div className='my-5'>
            <h1 className='text-center fw-bold'>Our Doctors</h1>
            <Row xs={2} sm={3} md={4} lg={5} className="g-2 g-lg-3 mx-0 my-3">
                {
                    doctors.slice(0, 8).map(x => <DoctorsCard key={x.id} data={x}></DoctorsCard>)
                }
            </Row>

        </div>
    );
};

export default DoctorsDemo;