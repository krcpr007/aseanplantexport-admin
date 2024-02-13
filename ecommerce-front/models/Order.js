import {model, models, Schema} from "mongoose";

const OrderSchema = new Schema({
  userEmail: String,
  line_items:Object,
  name:String,
  email:String,
  city:String,
  postalCode:String,
  streetAddress:String,
  state_province: String,
  country:String,
  paid:Boolean,
  commentsAboutOrder:String, // for taking comments from the user at time of delivery method.
}, {
  timestamps: true,
});

export const Order = models.Order || model('Order', OrderSchema);