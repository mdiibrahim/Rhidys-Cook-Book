import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../TitleHooks/useTitle';

const MyReviews = () => {
    //for title
    useTitle('My-Reviews')
    const { user } = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default MyReviews;