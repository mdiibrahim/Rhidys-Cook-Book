import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const service = useLoaderData();
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl ">
                <figure className="px-6 pt-10">
                    <img src={service.img} alt="img" className="rounded-xl max-h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>{service.details}</p>
                    <h2>Price: <span className='font-bold text-lg mt-2'>${service.price}</span></h2>
                    <div className="card-actions">
                        <Link to='/' className="btn btn-outline btn-accent">Add Review</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;