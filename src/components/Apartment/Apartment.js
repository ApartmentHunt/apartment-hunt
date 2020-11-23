import React from 'react';
import SecoundHeader from './SecoundHeader';
import '../Apartment/Apartment.css'
import Property from './Property';
import Navigation from '../Navigation/Navigation';


const Apartment = () => {
    return (
        <main>
            <Navigation></Navigation>
            <SecoundHeader></SecoundHeader>
            <Property></Property>
        </main>
    );
};

export default Apartment;