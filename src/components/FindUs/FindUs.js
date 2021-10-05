import React from 'react';
import './FindUS.css';

const FindUs = () => {
    return (
        <div>
            <div className="container">
                <h2 className="font-monospace fs-1">Explore us</h2>
                <div className="container container-bg rounded-3 shadow p-3 my-5">
                    <div className="container p-5 rounded container-bg ">
                        <div className="container p-5 my-5 rounded container-bg text-light">
                            <div class="container">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-lg-4 col-sm-12">
                                        <h1>Our Branches</h1>
                                    </div>
                                    <div class="col-lg-4 col-sm-12">
                                        <div class="container">
                                            <div class="row gy-5">
                                                <div class="col-12 align-self-center">
                                                    <h3>Dhanmandi</h3>
                                                    <p>Dhaka, Bangladesh</p>
                                                    <p><i>Contact: +8801862555331</i></p>
                                                </div>
                                                <div class="col-12 align-self-center">
                                                    <h3>Basundhara</h3>
                                                    <p>Dhaka, Bangladesh</p>
                                                    <p><i>Contact: +8801862555331</i></p>
                                                </div>
                                                <div class="col-12 align-self-center">
                                                    <h3>CU Campus</h3>
                                                    <p>Chittagong, Bangladesh</p>
                                                    <p><i>Contact: +8801862555331</i></p>
                                                </div>
                                            </div>
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

export default FindUs;