import React, { useContext, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from '../Header/Header';
import StripePaymentCard from '../StripePayment/StripePaymentCard'

const stripePromise = loadStripe('pk_test_51Ie2rSHrD36OpIOzPD1aMmqtuvugFYN9CXCQwwlu407jwD6bHGrqNh4BNhqIRCSgthAbFg2pEixzFuPdHKgnDGep00bfc1ULFk')
const Payment = () => {
    return (
        <div className="container">
            <Header />
            <Elements stripe={stripePromise}>
                <StripePaymentCard />
            </Elements>
        </div>
    );
};

export default Payment;