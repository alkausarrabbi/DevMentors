import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./OurCourses.css"


const OurCourses = () => {
    const [courses, setCourses] = useState([]);

    // facthing data from fake json file
    useEffect( () => {
        fetch('./devMentors.json')
        .then(res => res.json())
        .then(data => setCourses(data));
        
    }, [])
    return (
        <div>
             <h2 className="font-monospace fs-1 textdeco">Our Courses</h2>
            {
                courses.map(course => <Course
                    course={course}
                    key={course.id}
                    >
                </Course>)    
            }
        </div>
    );
};


export default OurCourses;