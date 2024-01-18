import mongoose, { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: false },
  parent: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: [{ type: Object }]
});

export const Category = models?.Category || model('Category', CategorySchema);