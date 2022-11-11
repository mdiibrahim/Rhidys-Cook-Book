import React from 'react';
import { Link } from 'react-router-dom';

const Delivery = () => {
    return (
        <div>
            <div className="hero min-h-max bg-amber-100 ">
                <div className="hero-content py-16 flex-col lg:flex-row">
                    <img src="delivery.jpg" alt='' className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hey food  lovers!</h1>
                        <p className="py-6">The fresh, healthy food delivery services in your city.</p>
                        <p>You can get your desired food with Our fastest delivery.</p>
                        <Link to='add-services' className="mt-3 btn btn-outline btn-accent">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;