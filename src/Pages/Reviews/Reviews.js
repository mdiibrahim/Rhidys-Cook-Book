import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://rhidys-cook-book-server-side.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    })
    return (
        <div className='lg:grid grid-cols-2 gap-4'>

            {
                reviews.map(review => {
                    return (
                            <div key={review._id}>
                            <div className="card w-full bg-base-100 shadow-xl ">
                                <figure className="px-6 pt-10">
                                    
                                    <img src={review.img} alt="img" className="rounded-xl max-h-96" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{ review.name}</h2>
                                    
                                            <p>{review.message}</p>
                                    

                                    </div>
                                </div>
                            </div>
                        
                        
                    )
                })
            }
            </div>
    );
};

export default Reviews;