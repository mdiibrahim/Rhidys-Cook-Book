import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../TitleHooks/useTitle';
import Banner from './Banner/Banner';
import Customer from './Customer/Customer';
import Delivery from './Delivery/Delivery';
import MyAddedServices from './MyAddedServices/MyAddedServices';
import ServicesAtHome from './ServicesAtHome/ServicesAtHome';


const Home = () => {
    const servicesAtHome = useLoaderData();
    //for title
    useTitle('Rhidys-Cook-Book-Home')
    return (
        <div>
            <Banner></Banner>
            <ServicesAtHome servicesAtHome={servicesAtHome}></ServicesAtHome>
            <Delivery></Delivery>
            <MyAddedServices></MyAddedServices>
            <Customer></Customer>
        </div>
    );
};

export default Home;