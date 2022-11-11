import React from 'react';
import { useTitle } from '../TitleHooks/useTitle';
import Banner from './Banner/Banner';
import Customer from './Customer/Customer';
import Delivery from './Delivery/Delivery';


const Home = () => {
    //for title
    useTitle('Rhidys-Cook-Book-Home')
    return (
        <div>
            <Banner></Banner>
            <Delivery></Delivery>
            <Customer></Customer>
        </div>
    );
};

export default Home;