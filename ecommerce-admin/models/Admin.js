import {model, models, Schema} from "mongoose";

const adminSchema = new Schema({
  email: {type: String, required: true, unique: true},
  isSuperAdmin: {type: Boolean, default: false}, // such as root user will be never deleted
}, {timestamps: true});

export const Admin = models?.Admin || model('Admin', adminSchema);