import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {title, img, fees, description,rating,seats,remaining} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="d-flex justify-content-center courses mx-auto ">
            <div class="container-fluid p-4 m-3 border border-3 border-secondary rounded-pill bg-light">
                <div class="row gy-5 align-items-center">
                    <div class="col-6 p-0">
                        <div class="p-0">
                            <img className="image" src={img} alt="" />
                        </div>
                    </div>
                    <div class="col-6 p-0">
                        <div class="p-3 text-start">
                            <h2>{title}</h2>
                            <h5 className="text-danger"><b>Fees: $ {fees}</b></h5>
                            <p> <b>Course Details</b>  : {description}</p>
                            <h6>Course Rating : {element} {rating} </h6>
                            <p>Total Seats :{seats}</p>
                            <p>Seats Remaining :{remaining}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;