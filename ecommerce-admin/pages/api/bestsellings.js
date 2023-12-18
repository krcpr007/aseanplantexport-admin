import {BestSeller} from "@/models/BestSellers";
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
  await isAdminRequest(req,res);

  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await BestSeller.findOne({_id:req.query.id}));
    } else {
      res.json(await BestSeller.find());
    }
  }

  if (method === 'POST') {
    const {title,description,price,images,category,properties} = req.body;
    const productDoc = await BestSeller.create({
      title,description,price,images,category,properties,
    })
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const {title,description,price,images,category,properties,_id} = req.body;
    await BestSeller.updateOne({_id}, {title,description,price,images,category,properties});
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await BestSeller.deleteOne({_id:req.query?.id});
      res.json(true);
    }
  }
}