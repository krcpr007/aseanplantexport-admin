import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";
const stripe = require('stripe')(process.env.STRIPE_SK);
function calculateShippingPrice(totalWeight, destination) {
  const shippingData = [
      { size: '1', dimensions: [42, 8, 8], volume: 2.7, freight: 0.53, freightCharge: 1, USA: 50, Alaska: 75, Canada: 60, UK: 65, EU: 135, Norway: 75, 'Russia, Belarus': 77, Singapore: 87, 'South Korea': 64, Japan: 103 },
      { size: '2', dimensions: [42, 8, 17], volume: 5.7, freight: 1.3, freightCharge: 1.5, USA: 69, Alaska: 95, Canada: 85, UK: 90, EU: 170, Norway: 90, 'Russia, Belarus': 96, Singapore: 87, 'South Korea': 89, Japan: 103 },
      { size: '3', dimensions: [62, 16, 9], volume: 8.93, freight: 1.78, freightCharge: 2, USA: 79, Alaska: 105, Canada: 100, UK: 110, EU: 175, Norway: 105, 'Russia, Belarus': 115, Singapore: 87, 'South Korea': 103, Japan: 103 },
      { size: '4', dimensions: [60, 15, 15], volume: 13.5, freight: 2.7, freightCharge: 3, USA: 105, Alaska: 150, Canada: 125, UK: 138, EU: 210, Norway: 140, 'Russia, Belarus': 153, Singapore: 87, 'South Korea': 130, Japan: 103 },
      { size: '5', dimensions: [60, 20, 20], volume: 24, freight: 4.8, freightCharge: 5, USA: 155, Alaska: 225, Canada: 180, UK: 200, EU: 270, Norway: 205, 'Russia, Belarus': 230, Singapore: 87, 'South Korea': 184, Japan: 103 },
      { size: '6', dimensions: [60, 45, 20], volume: 54, freight: 10.8, freightCharge: 11, USA: 295, Alaska: 440, Canada: 345, UK: 385, EU: 452, Norway: 399, 'Russia, Belarus': 460, Singapore: 143, 'South Korea': 348, Japan: 1341 },
      { size: '7', dimensions: [100, 30, 30], volume: 90, freight: 18, freightCharge: 18, USA: 460, Alaska: 695, Canada: 530, UK: 585, EU: 653, Norway: 640, 'Russia, Belarus': 728, Singapore: 207, 'South Korea': 529, Japan: 1378 },
      { size: '8', dimensions: [45, 55, 40], volume: 99, freight: 19.8, freightCharge: 20, USA: 498, Alaska: 760, Canada: 580, UK: 635, EU: 705, Norway: 699, 'Russia, Belarus': 793, Singapore: 225, 'South Korea': 573, Japan: 1388 }
  ];

  let remainingWeight = totalWeight;
  let totalShippingCost = 0;

  for (let i = shippingData.length-1; i >0 ; i--) {
      const freightCharge = Math.round(shippingData[i].freight);
      if (remainingWeight >= freightCharge) {
          totalShippingCost += shippingData[i][destination];
          remainingWeight -= freightCharge;
      } else {
          for (let j = i + 1; j < shippingData.length; j++) {
              if (remainingWeight >= Math.round(shippingData[j].freight)) {
                  totalShippingCost += shippingData[j][destination];
                  remainingWeight -= Math.round(shippingData[j].freight);
                  break;
              }
          }
      }

      if (remainingWeight === 0) break;
  }

  return totalShippingCost;
}
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }
  const {
    name, email, city,
    postalCode, streetAddress, country, commentsAboutOrder,
    cartProducts,
  } = req.body;
  await mongooseConnect();
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId);
    const quantity = productsIds.filter(id => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: productInfo.title },
          unit_amount: parseInt(quantity * productInfo.price) * 100,
        },
      });
    }
  }

  const session = await getServerSession(req, res, authOptions);

  const orderDoc = await Order.create({
    line_items, name, email, city, postalCode,
    streetAddress, country, paid: false, commentsAboutOrder,
    userEmail: session?.user?.email,
  });

  const shippingFeeSetting = await Setting.findOne({ name: 'shippingFee' });
  const shippingFeeCents = parseInt(shippingFeeSetting.value || '0') * 100;

  const stripeSession = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart?success=1',
    cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    metadata: { orderId: orderDoc._id.toString() },
    allow_promotion_codes: true,
    shipping_options: [
      {
        shipping_rate_data: {
          display_name: 'shipping fee',
          type: 'fixed_amount',
          // fixed_amount: { amount: shippingFeeCents, currency: 'USD' },
         fixed_amount: { amount: calculateShippingPrice(27,country)*100, currency: 'USD' },
        },
      }
    ],
  });

  res.json({
    url: stripeSession.url,
  })

}