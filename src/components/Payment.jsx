import { useEffect } from 'react';

export default function Payment() {
    useEffect(() => {
        const loadSquare = async () => {
            const { Payments, paymentRequest } = await import('@square/web-sdk');

            // Initialize the Payments object with your Square credentials
            const payments = await Payments.load({
                applicationId: 'your-application-id', // Replace with your Square Application ID
                locationId: 'your-location-id', // Replace with your Square Location ID
            });

            // Create the payment request (this example uses a basic credit card payment)
            const paymentRequestObj = new paymentRequest.PaymentRequest({
                countryCode: 'US',
                currencyCode: 'USD',
                totalAmount: 1000, // Amount in the smallest currency unit (e.g., cents)
                lineItems: [
                    {
                        label: 'Service Fee',
                        amount: 1000,
                    },
                ],
            });

            // Create and mount the payment form to the DOM
            const paymentForm = await payments.paymentRequest(paymentRequestObj);
            const paymentFormContainer = document.getElementById('payment-form-container');
            paymentForm.attach(paymentFormContainer);

            // Handle payment submission (this sends the payment token to the backend)
            const onPaymentSubmitted = async (event) => {
                event.preventDefault();
                try {
                    const paymentResult = await paymentForm.tokenize(); // This gets the payment token

                    // Send the payment token to your backend to complete the payment
                    const response = await fetch('/process-payment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token: paymentResult.token }),
                    });

                    const data = await response.json();
                    console.log('Payment Success:', data);
                } catch (error) {
                    console.error('Payment Failed:', error);
                }
            };

            // Attach the submit button
            const submitButton = document.getElementById('submit-payment');
            submitButton.addEventListener('click', onPaymentSubmitted);
        };

        loadSquare();
    }, []);

    return (
        <div>
            <h2>Payment Section</h2>
            <div id="payment-form-container"></div> {/* Square payment form will be inserted here */}
            <button id="submit-payment">Submit Payment</button>
        </div>
    );
}
