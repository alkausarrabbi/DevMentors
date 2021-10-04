import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <div className="container p-5">
                <div className="container shadow p-3 m-5 bg-dark rounded">
                    <div className="container p-5 rounded bg-dark ">
                        <div className="container p-5 rounded bg-dark text-danger">
                            <h1>404!</h1>
                            <p className="text-danger"> <strong>The page you are searching is invalid!</strong><br />Please check again.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;