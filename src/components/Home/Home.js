import React, { useEffect, useState } from 'react';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import Review from '../Review/Review';
import "./Home.css"


const Home = () => {
    const [courses, setCourses] = useState([]);

    // facthing data from Our json file
    useEffect( () => {
        fetch('./devmentorsFeaturedCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
        
    }, [])
    return (
        <div>
            <div class="col p-0 align-self-center text-secondary font-monospace fs-2 mb-5">
                        <h5 class="fst-italic">We believe in Intensive Student Care</h5>
                        <p>Your Trust, Our Promise</p>
                        <h6><strong><small>DEVELOPMENT  |  PROGRAMMING  | CONCEPT</small></strong></h6>
                        </div>     

            <div className="authors container-fluid px-0">
                <div className="authors-blog-container row g-2">
                    <h2 className="font-monospace fs-1 textdec mb-4">Featured Courses</h2>               
                    <div className="container-fluid w-75">
                        <div className="authors-container row g-4 mx-auto ">
                            {
                                courses.map(course => <FeaturedCourses
                                    course={course}
                                    key={course.id}
                                    >
                                </FeaturedCourses>)    
                            }
                            <Review></Review>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 