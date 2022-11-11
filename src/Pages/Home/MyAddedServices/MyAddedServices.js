import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAddedServices = () => {
    const [myAdding, setMyAdding] = useState([]);
    const { addedServices } = useContext(AuthContext);
    useEffect(() => {
        const url = `https://rhidys-cook-book-server-side.vercel.app/services/${addedServices}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAdding(data))
    }, [addedServices]);

    return (
        <div>
            <h2 className='mt-4 p-6 text-3xl text-center font-semibold'>My Added Services:</h2>
                {
                
                    myAdding?._id ?
                        <div className='grid md:grid-cols-4 grid-cols-2'>

                        <div className="card sm:w-2/4  bg-base-100 shadow-xl image-full">
                            <figure><img src={myAdding.img} alt="img" className='max-h-96' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{myAdding.name}</h2>
                                <p>Price: ${myAdding.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Add Now</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        :
                        <div className='grid grid-cols-1 text-center'>You havn't added a services yet...</div>
                }

        </div>
    );
};

export default MyAddedServices;