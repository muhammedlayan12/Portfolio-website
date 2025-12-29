import connectDB from '@/lib/mongodb';
import { Admin } from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export async function POST(req: Request) {
  try {
    await connectDB();
    const { pin } = await req.json();

    if (!pin) return NextResponse.json({ error: 'PIN is required' }, { status: 400 });

    const admin = await Admin.findOne({ role: 'super-admin' });
    if (!admin) return NextResponse.json({ error: 'Admin account not found' }, { status: 500 });

    const isMatch = await bcrypt.compare(pin, admin.pin);
    if (!isMatch) return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 });

    const token = jwt.sign(
      { role: admin.role, id: admin._id }, 
      JWT_SECRET, 
      { expiresIn: '12h' }
    );

    return NextResponse.json({ success: true, token });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}