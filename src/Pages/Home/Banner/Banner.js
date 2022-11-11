import React from 'react';
import {MdFoodBank} from 'react-icons/md'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `url("banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Welcome Foody People!!!</h1>
                        <p className="mb-5">We are ready to serve homemade food, desert and your personal preferences healthy & fresh food only for you.</p>
                        <button className="btn btn-outline btn-accent"><Link to='/signup'>Join our home </Link><MdFoodBank className='text-lg ml-3'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;