import mongoose, { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Message = models.Message || model('Message', MessageSchema);