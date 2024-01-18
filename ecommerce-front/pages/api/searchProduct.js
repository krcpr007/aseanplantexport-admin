import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
// import { Category } from "@/models/Category";
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method not allowed
    }
    try {
        await mongooseConnect();
        const { search } = req.body;
        const products = await Product.find({ title: { $regex: search, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}