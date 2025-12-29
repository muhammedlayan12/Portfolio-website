import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: { type: String, default: 'unread' }, // unread or read
  createdAt: { type: Date, default: Date.now },
});

export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);