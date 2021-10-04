import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <>
            <nav className="px-5 navbar navbar-expand-lg sticky-top navbar-light bg-light shadow p-1 mb-5 bg-body rounded">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><span className="nav-brand-yapp-mart fs-2 font-monospace fw-bolder">Dev Mentors' </span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/home"><span className="fs-4  font-monospace">Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/ourcourses"><span className="fs-4  font-monospace">Courses</span></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/about"><span className="fs-4  font-monospace">About US</span></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/findus"><span className="fs-4  font-monospace">Find Us</span></NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/enroll"><button type="button" class="fs-6 btn btn-outline-danger">Enroll Now</button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderNav;