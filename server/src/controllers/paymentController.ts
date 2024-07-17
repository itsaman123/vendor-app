import { Request, Response } from 'express';
import Stripe from 'stripe';
const STRIPE_SECRET_KEY:any=process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(STRIPE_SECRET_KEY);
export async function makePayment(req: Request, res: Response) {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map((item: any) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            })),
            success_url: `http://localhost:3000/`,
            cancel_url: `http://localhost:3000/shop`,
        });
        res.json({ url: session.url });
    } catch (e) {
        console.error(e);
        res.status(500).json(e);
    }
}
