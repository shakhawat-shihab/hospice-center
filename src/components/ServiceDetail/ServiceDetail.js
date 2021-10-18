import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ServiceContext } from '../../context/ServiceProvider';

const ServiceDetail = () => {
    const { services } = useContext(ServiceContext);
    const { serviceId } = useParams();
    const service = services.find(x => x.id.toString() === serviceId)
    console.log(services, serviceId, service);
    return (
        <div>

        </div>
    );
};

export default ServiceDetail;