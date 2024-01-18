import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
export default async function handle(req, res) {
    try {
        await mongooseConnect();
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}