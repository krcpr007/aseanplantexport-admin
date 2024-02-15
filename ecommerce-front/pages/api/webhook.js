import {mongooseConnect} from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';
import {Order} from "@/models/Order";
//@important 
/// just for example not the real webhook secret and webhook 
const endpointSecret = "whsec_634d3142fd2755bd61adaef74ce0504bd2044848c8aac301ffdb56339a0ca78d";

export default async function handler(req,res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  // switch (event.type) {
  //   case 'checkout.session.async_payment_failed':
  //     const checkoutSessionAsyncPaymentFailed = event.data.object;
  //     // Then define and call a function to handle the event checkout.session.async_payment_failed
  //     break;
  //   case 'checkout.session.async_payment_succeeded':
  //     const checkoutSessionAsyncPaymentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event checkout.session.async_payment_succeeded
  //     break;
  //   case 'checkout.session.completed':
  //     const checkoutSessionCompleted = event.data.object;
  //     // Then define and call a function to handle the event checkout.session.completed
  //     break;
  //   case 'checkout.session.expired':
  //     const checkoutSessionExpired = event.data.object;
  //     // Then define and call a function to handle the event checkout.session.expired
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId,{
          paid:true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
  api: {bodyParser:false,}
};

// bright-thrift-cajole-lean
// acct_1Lj5ADIUXXMmgk2a