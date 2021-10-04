import React from 'react';
import './FeaturedCourses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {title, img, fees, description} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={faStarHalfAlt} />

    return (
        <div className="container-fluid" >
            <div className="col-lg-6 course mx-auto p-3 mb-4 ">
                <div className="card p-3 border bg-light">
                    <div className="d-flex justify-content-center">
                        <div className="container-fluid p-4 m-3 border border-3 border-secondary rounded bg-light">
                            <div className="row gy-5 align-items-center">
                                <div className="col p-0">
                                    <div className="p-0">
                                        <img className="image" src={img} alt="" />
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="p-3 text-start">
                                        <h2>{title}</h2>
                                        <h5 className="text-danger"><b>Fees: $ {fees}</b></h5>
                                        <p> <b>Course Details</b>  : {description}</p>
                                        <div>
                                            {element} {element} {element} {element} {element2}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;