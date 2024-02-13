import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();
  const { categories, sort, phrase, page, limit = 16, ...filters } = req.query;
  let [sortField, sortOrder] = (sort || '_id-desc').split('-');

  const productsQuery = {};
  if (categories) {
    productsQuery.category = categories.split(',');
  }
  if (phrase) {
    productsQuery['$or'] = [
      {title:{$regex:phrase,$options:'i'}},
      {description:{$regex:phrase,$options:'i'}},
    ];
  }
  if (Object.keys(filters).length > 0) {
    Object.keys(filters).forEach(filterName => {
      productsQuery['properties.'+filterName] = filters[filterName];
    });
  }
  const skip = (page - 1) * limit;
  const response =await Product.find(
    productsQuery,
    null,
    {
      sort: { [sortField]: sortOrder === 'asc' ? 1 : -1 },
      skip: skip,
      limit: parseInt(limit),
    })
    console.log(response.length)
    // .skip(skip).limit(limit)
  res.json(response);
}