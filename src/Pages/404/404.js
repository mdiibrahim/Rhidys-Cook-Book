import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div>
            <div className="card mx-auto bg-base-100 shadow-xl image-full mt-44" style={{ width: "700px" }}>
                <figure><img src='error.jpg' alt="error" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ooooppppssss!</h2>
                    <p>This page can not found. You are in wrong pages.</p>
                    <div className="card-actions justify-end">
                        <Link to='/' className="btn btn-outline btn-success" >Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;