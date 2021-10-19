import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiFillTags } from "react-icons/ai";
import useService from '../../Hooks/useService';
const ServiceDetail = () => {
    window.scrollTo(0, 0);
    const { services } = useService();
    const [target, setTarget] = useState({});
    const { serviceId } = useParams();
    console.log(services);
    useEffect(() => {
        setTarget((services.find(x => x.id.toString() === serviceId)))
    }, [services]);
    return (
        <div className='my-5 pt-5'>
            <div className='row m-0 px-3 my-5'>
                <div className='col-md-7'>
                    <h4 className='text-center'>Service Name: {target?.service}</h4>
                    <h6>
                        <AiFillTags className='text-info' />
                        <span className='ps-2'> {target?.type}</span>
                    </h6>
                    <p>Description: </p>
                    <h5>Cost: {target?.cost}</h5>
                </div>
                <div className='col-md-4'>
                    <div className='text-center'  >
                        <img src={target?.image} width='80%' className='rounded border' alt={target?.ervice} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;