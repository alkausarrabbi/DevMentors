import React from 'react';
import './FeaturedCourses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {title, img, fees, description} = props.course;
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={faStarHalfAlt} />

    return (
        <div className="col-lg-5 rounded course p-4 m-4">
             <div class="card h-100">
      <img src={img} class="card-img-top h-80" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <p class="card-text">{description}</p>
        <p className="text-danger">Course Fee : $ {fees}</p>
        <div>
            {element}{element}{element}{element}{element2}
        </div>
      </div>
      </div>
        </div>
       
       
    );
};

export default Course;