import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../src/images/feedback-1.webp';
import img2 from '../../../src/images/feedback-2.jpg';
import img3 from '../../../src/images/boy-1.png';
import { AiFillStar } from "react-icons/ai";
import './Feedback.css'
const Feedback = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // const [feedback, setFeedback] = useState([]);
    // useEffect(() => {
    //     fetch('./user-review.json')
    //         .then(resp => resp.json())
    //         .then(json => setFeedback(json))
    // }, []);
    // console.log(feedback);
    return (
        <div className='my-5 '>
            <h2 className='text-center my-5 fw-bold'>Enjoy our Client’s Feedback</h2>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                    <Carousel.Item interval={1200}>
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6  text-center'>
                                <img src={img1} alt="" width="70%" />
                            </div>
                            <div className='col-sm-6 '>
                                <h3>Allina Rahman</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-secondary' />
                                <h6 className='py-3'>I took service from them, the dcotors are so helpful. Their Accomudation facility is also excellent.</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6 text-center'>
                                <img src={img2} alt="" width="70%" />
                            </div>
                            <div className='col-sm-6'>
                                <h3>Israt Jahan</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <h6 className='py-3'>The Nurse and their service is too good. I admitted their for aome days and they threated me like a family memeber.</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className='row g-4 g-sm-3 m-0 px-4 justify-content-center align-items-center' >
                            <div className='col-sm-6 text-center'>
                                <img src={img3} alt="" width="70%" />
                            </div>
                            <div className='col-sm-6'>
                                <h3>Emon Khan</h3>
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-warning' />
                                <AiFillStar className='text-secondary' />
                                <h6 className='py-3'>"I became a memeber of their organisation. I donate for them and this donation is used for poor peoplr's treatment.</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Feedback;