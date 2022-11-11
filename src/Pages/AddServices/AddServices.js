import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../TitleHooks/useTitle';

const AddServices = () => {
    //for title
    useTitle('Add-Services');
    const { setAddedServices } = useContext(AuthContext);

    const services = useLoaderData();
    const handleAddServices = (id) => {
        toast.success("Add a services succesfully");
        setAddedServices(id);
        
    }
    return (
        <div className='lg:grid grid-cols-3 mt-20 gap-4'>
            {
                services.map(service => {
                    return (
                        <div key={service._id}>
                            <div className="card w-full bg-base-100 shadow-xl image-full">
                                <figure><img src={service.img} alt="img" className='max-h-96'/></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>Price: ${service.price}</p>
                                    <div className="card-actions justify-end">
                                        <button onClick={()=>handleAddServices(service._id)} className="btn btn-primary">Add Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })


            }
        </div>
    );
};

export default AddServices;