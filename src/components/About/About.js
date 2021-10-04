import React from 'react';
import img from '../../components/images/logo.png';
import "./About.css"

const About = () => {
    return (
        <div className="container">
            <div>
            <h1 className="font-monospace fs-1">About US</h1>
            <h4 className="fst-italic text-muted">Dev Mentors'</h4>
            </div>
           
                <div className="container shadow my-5 bg-light about p-5">
                <img src={img} alt="" className="img-fluid "/>
                    <div className="rounded bg-light ">
                        <div className="rounded  bg-light text-secondary">
                            <p className="text-dark pt-5">Dev mentors' is  an intensive caring school for the future developers shining itself since last 13 years. There are international classy teachers who instructed the students to learn developing deeply. Dev Mentors' don't believe to teach only codes rather teaching concepts.  The authority prepare each students as a job seeker worthy if the students motivate themselves to follow every single instruction accurately.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;