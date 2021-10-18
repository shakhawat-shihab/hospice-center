import React, { useContext, useState } from 'react';
import { Nav, Row } from 'react-bootstrap';
import { ServiceContext } from '../../../context/ServiceProvider';
import ServiceCard from '../../ServiceCard/ServiceCard';

const ServicesDemo = () => {
    // const [services, setServices] = useState([]);
    const { services } = useContext(ServiceContext);
    const [nav, setNav] = useState({ test: true, ambulance: false, operation: false });
    // useEffect(() => {
    //     fetch('./services.json')
    //         .then(resp => resp.json())
    //         .then(json => setServices(json))
    // }, []);
    const test = services.filter(x => x.type === 'test');
    const ambulance = services.filter(x => x.type === 'ambulance');
    const operation = services.filter(x => x.type === 'operation');
    // console.log(services);
    const handleSelect = (eventKey) => {
        // console.log(eventKey);
        if (eventKey === '1') {
            setNav({ test: true, ambulance: false, operation: false });
        }
        else if (eventKey === '2') {
            setNav({ test: false, ambulance: true, operation: false });
        }
        else if (eventKey === '3') {
            setNav({ test: false, ambulance: false, operation: true });
        }
    }
    return (
        <div className='my-5'>
            <h1 className='text-center fw-bold'>Our Services</h1>
            <Nav variant="pills" className="justify-content-center my-3" onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link active={nav?.test} eventKey="1" >
                        Test
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={nav?.ambulance} eventKey="2" >
                        Ambulance
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={nav?.operataion} eventKey="3" >
                        Operation
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Row xs={1} sm={2} md={3} lg={4} className="g-2 g-lg-3 mx-0 my-3">
                {
                    nav.test && (test.slice(0, 8).map(x => <ServiceCard key={x.id} data={x}></ServiceCard>))
                }
                {
                    nav.ambulance && (ambulance.map(x => <ServiceCard key={x.id} data={x}></ServiceCard>))
                }
                {
                    nav.operation && (operation.map(x => <ServiceCard key={x.id} data={x}></ServiceCard>))
                }

            </Row>

        </div>
    );
};

export default ServicesDemo;