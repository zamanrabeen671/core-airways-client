import { React, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe,  } from '@stripe/react-stripe-js';

const StripePaymentCard = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const [passengerDetails, setPassengerDetails] = useState([]);
    const [seat, setSeat] = useState([]);

    useEffect(() => {
        fetch('https://evening-brushlands-14234.herokuapp.com/bookedSeat')
        .then(res => res.json())
        .then(data => setSeat(data))
    }, [])

    useEffect(() => {
        fetch('https://evening-brushlands-14234.herokuapp.com/flightDetails')
        .then(res => res.json())
        .then(data => {
            setPassengerDetails(data)
            console.log(data)
        });
    }, [])
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        console.log(paymentMethod);
        // error and success handling
        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
        }
    };
        return (
            <div className="row d-flex container mt-5">
                <div className="col-md-5">
                    <h5>Payment through your card</h5><br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="" className="">Put your card details below:</label>
                            <CardElement className="form-control" /><br />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className=""><p className="">Your service will cost ${}</p></div>
                            <div><button type="submit" disabled={!stripe} className="btn btn-warning">Pay</button></div>
                        </div>
                    </form>

                    {
                        paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                    }
                    {
                        paymentSuccess && <p style={{ color: 'green' }}>Your payment is successfull.</p>
                    }
                </div>
            </div>
        );
}
    export default StripePaymentCard;