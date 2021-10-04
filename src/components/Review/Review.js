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
        <div className="mb-5 p-5">
            <h2 className="m-5 p-3">Students Review</h2>
           <div className="card-group">
  <div className="card">
    <img src={image1} className="card-img-top img-fluid " alt="..."/>
    <div className="card-body">
      <h5 className="card-title">
          Sam Smith
      </h5>
      <p className="card-text">That's a really good & outstanding coaching Center. In this center,,many qualified & best teachers are teaching here.seluate u</p>
    </div>
    <div className="card-footer">
    {element}{element}{element}{element}{element2}
    </div>
  </div>
  <div className="card">
    <img src={image2} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Jayden Christiansen</h5>
      <p className="card-text">Was a student of there, now being a teacher feels kinda nostalgic.</p>
    </div>
    <div className="card-footer">
    {element}{element}{element}{element}{element2}
    </div>
  </div>
  <div className="card">
    <img src={image3} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Monique Witting</h5>
      <p className="card-text">ne of the best couching center for science students who wants to learn computer programming , design e.tc</p>
    </div>
    <div className="card-footer">
    {element}{element}{element}{element}{element2}
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;