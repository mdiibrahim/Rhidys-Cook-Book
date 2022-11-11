import React from 'react';
import { Link } from 'react-router-dom';

const ServicesAtHome = ({ servicesAtHome }) => {

    return (
        <div className='my-6'>

            <h2 className='mt-4 p-6 text-3xl text-center font-semibold'>Our  Services:</h2>
            <div className='grid lg:grid-cols-2 gap-4'>

                {
                    servicesAtHome.map(service => {
                        return (
                            <div key={service._id}>
                                <div className="card w-full shadow-lg bg-slate-50">
                                    <figure className="px-6 pt-10">
                                        <img src={service.img} alt="img" className="rounded-xl max-h-96" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{service.name}</h2>
                                        {
                                            service.details.length > 100 ?
                                                <p>{service.details.slice(0, 100) + '.......'}</p>
                                                :
                                                <p>{service.details}</p>
                                        }
                                        <div className="card-actions">
                                            <Link to={`services/${service._id}`} className="btn btn-outline btn-accent">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="grid justify-items-center">
                <Link to='/services' className="btn btn-outline btn-accent w-1/4 mt-6">Details</Link>
            </div>

        </div>
    );
};

export default ServicesAtHome;