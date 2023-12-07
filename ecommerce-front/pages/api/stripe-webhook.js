// pages/api/stripe-webhook.js

import { buffer } from 'micro';
import { Order } from "@/models/Order";// Adjust the path as needed
const stripeClient = require('stripe')(process.env.STRIPE_SK);
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const reqBuffer = await buffer(req);
        const sig = req.headers['stripe-signature'];

        let event;
        try {
            event = stripeClient.webhooks.constructEvent(
                reqBuffer,
                sig,
                process.env.STRIPE_WEBHOOK_SECRET
            );
        } catch (err) {
            console.log('Webhook Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const orderId = session.metadata.orderId;

            try {
                await Order.findByIdAndUpdate(orderId, { paid: true });
                res.status(200).json({ received: true });
            } catch (err) {
                console.log('Error updating order:', err.message);
                res.status(400).json({ error: `Error updating order: ${err.message}` });
            }
        } else {
            console.log('Unhandled event type:', event.type);
            res.json({ received: true });
        }
    } else {
        console.log('Method not allowed');
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};

export default handler;
