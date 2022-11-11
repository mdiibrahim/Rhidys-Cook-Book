import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, name } = useLoaderData();
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const message = form.message.value;

        const review = {
            _id,
            name,
            email,
            message
        }

        fetch('https://rhidys-cook-book-server-side.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('review added successfully')
                    form.reset();
                    
                }
            })
            .catch(error => console.error(error));


    }
    return (
        <div>
            <h2 className='text-center'>Add a review</h2>
            <form onSubmit={handleReview}>
                <h4 className="text-3xl">Service name: {name}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Enter Your name" className="input input-ghost w-full  input-bordered" defaultValue={user?.displayName} required/>
                    <input type="text" placeholder="Your pic URL" className="input input-bordered" name='photoURL' required />
                    
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full mb-2  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Add Your Review" />
            </form>
        </div>
    );
};

export default AddReview;