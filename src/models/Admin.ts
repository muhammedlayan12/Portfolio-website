// models/Admin.ts
import mongoose, { Schema, model, models } from 'mongoose';

const AdminSchema = new Schema({
  role: { type: String, default: 'super-admin' },
  pin: { type: String, required: true }, // Encrypted PIN
});

export const Admin = models.Admin || model('Admin', AdminSchema);