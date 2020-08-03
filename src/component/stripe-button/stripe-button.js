import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe= price*100;
    const publishableKey='pk_test_51HBsf0JIs70I1fLvJZVlSePiIPrjqGcKkxWOJa9YslkHUxjlfkmHCwvQIigm80Axojj2kwkqnNXTKz8zslqK1gkN00RT2VmMKz';

    const onToken =token => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        alipay
        bitcoin
        />
    )
}

export default StripeCheckoutButton;