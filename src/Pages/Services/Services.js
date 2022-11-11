import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import { useTitle } from '../TitleHooks/useTitle';

const Services = () => {
    //for title
    useTitle('Our-Services');
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <h2 className='mt-4 p-6 text-3xl text-center font-semibold'>Our  Services:</h2>
            <div className='lg:grid grid-cols-2 gap-4'>

            {
                services.map(service => {
                    return (
                            <div key={service._id}>
                            <div className="card w-full bg-base-100 shadow-xl ">
                                <figure className="px-6 pt-10">
                                    <img src={service.img} alt="img" className="rounded-xl max-h-96" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{ service.name}</h2>
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
        </div>
    );
};

export default Services;