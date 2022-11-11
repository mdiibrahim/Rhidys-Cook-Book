import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user,spinner } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    if (spinner){
        <progress className="progress w-56"></progress>
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;