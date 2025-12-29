import connectDB from '@/lib/mongodb';
import { Message } from '@/models/Message';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await Message.create({ name, email, message });

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}