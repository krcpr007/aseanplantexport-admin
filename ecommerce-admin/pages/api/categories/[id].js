
import { Category } from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "@/pages/api/auth/[...nextauth]";
export default async function handler(req, res) {
    await mongooseConnect()
    const { id } = req.query;
    if (req.method === 'GET') {
        res.json(await Category.findOne({_id:id}));
    }
  }