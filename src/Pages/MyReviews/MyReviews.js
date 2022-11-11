import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>my review</h2>
        </div>
    );
};

export default MyReviews;