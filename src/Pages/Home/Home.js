import React from 'react';
import { useTitle } from '../TitleHooks/useTitle';
import Banner from './Banner/Banner';
import Customer from './Customer/Customer';


const Home = () => {
    useTitle('Rhidys-Cook-Book-Home')
    return (
        <div>
            <Banner></Banner>
            <Customer></Customer>
        </div>
    );
};

export default Home;