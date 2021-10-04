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

            <div className="authors container-fluid px-0">
                <div className="authors-blog-container row g-2">
                    <h2 className="font-monospace fs-1 textdec">Featured Courses</h2>                    
                    <div className="container-fluid">
                        <div className="authors-container row g-3 d-flex justify-content-center">
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