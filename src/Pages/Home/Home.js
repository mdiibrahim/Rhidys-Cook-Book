import React from 'react';
import Services from '../Services/Services';
import { useTitle } from '../TitleHooks/useTitle';
import Banner from './Banner/Banner';
import Customer from './Customer/Customer';
import Delivery from './Delivery/Delivery';
import MyAddedServices from './MyAddedServices/MyAddedServices';


const Home = () => {
    //for title
    useTitle('Rhidys-Cook-Book-Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Delivery></Delivery>
            <MyAddedServices></MyAddedServices>
            <Customer></Customer>
        </div>
    );
};

export default Home;