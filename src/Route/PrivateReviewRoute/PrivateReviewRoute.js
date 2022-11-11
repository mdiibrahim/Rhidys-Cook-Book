import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateReviewRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    
        
    
    return (
        <div>
            <h1 className='text-center text-xl my-11'>Please login to add a review <Link className="link link-success" to='/login' state={{from:location}} replace>Log In</Link></h1>
        </div>
    );
};

export default PrivateReviewRoute;