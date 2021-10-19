import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDoctor from '../../Hooks/useDoctor';

const DoctorDetail = (props) => {
    window.scrollTo(0, 0);
    const { doctors } = useDoctor();
    const [target, setTarget] = useState({});
    const { doctorId } = useParams();
    useEffect(() => {
        setTarget((doctors.find(x => x.id.toString() === doctorId)))
    }, [doctors]);
    return (
        <div className='my-5 pt-2'>
            <div >
                <div className='row m-0 px-3 my-5 align-items-center justify-content-center'>
                    <div className='col-md-7 col-5 '>
                        <h4 className=''> {target?.name}</h4>
                        <p>{target?.qualification} </p>
                        <h5> {target?.post}</h5>
                        <h6>Mobile Number: {target?.phone} </h6>
                    </div>
                    <div className='col-md-4 col-5'>
                        <div className='text-center'  >
                            <img src={target?.photo} width='90%' className='rounded border' alt={target?.name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;