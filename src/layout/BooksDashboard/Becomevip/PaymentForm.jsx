import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth()
    const [err,setErr]=useState('')
    const totalPrice=500.30;
    const [clientSecret,setClientSecret]=useState('')
    const [paymentMessage,setPaymentMessage]=useState('')
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret);
        })
        
    },[axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErr(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErr('')
        }
        // confirm payment
        const {paymentIntent,error:confirmError} =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous,',
                    name:user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('Confirm Error')
        }else{
            console.log('Payment Intent!',paymentIntent)
            if(paymentIntent.status==='succeeded'){
                console.log('Payment Intent Succeded!')
                setPaymentMessage('Payment Intent Succeded!')

                // save payment in db
                const payment={
                    email:user.email,
                    price:totalPrice,
                    date:new Date()
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                <p>{err}</p>
                <p className='text-green-600'>{paymentMessage}</p>
            </form>
        </div>
    );
};

export default PaymentForm;