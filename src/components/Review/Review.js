import React from 'react';
import image1 from "../../images/img-1.jfif"
import image2 from "../../images/img-2.jpg"
import image3 from "../../images/img-3.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
    const element = <FontAwesomeIcon icon={faStar} />
    const element2 = <FontAwesomeIcon icon={faStarHalfAlt} />
    return (
      <div className=" mx-auto mb-5 p-5">
        <h2 className="m-5 p-1">Students Reviews</h2>
        <div className="d-flex ">
        <div class="col-lg-4">
        <img src={image1}  class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Sam Smith</h2>
        <p>That's a really good & outstanding coaching Center. In this center,,many qualified & best teachers are teaching here.seluate u</p>
        <br />
        <p>Rated: {element}{element}{element}{element}{element2}</p>
      </div>
        <div class="col-lg-4">
        <img src={image2}  class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Jayden william</h2>
        <p>I was a student of there, now being a teacher feels kinda nostalgic.</p>
        <br />
        <br />
        <br />
        <p>Rated: {element}{element}{element}{element}{element2}</p>
      </div>
        <div class="col-lg-4">
        <img src={image3}  class="bd-placeholder-img rounded-circle" width="140" height="140" alt="" />
        <br />
        <h2>Monique Witting</h2>
        <p>One of the best couching center for science students who wants to learn computer programming , design e.tc</p>
        <br />
        <br />
        <p>Rated: {element}{element}{element}{element}{element2}</p>
      </div>
        </div>
        
      </div>
    );
};

export default Review;