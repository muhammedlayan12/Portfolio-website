import connectDB from '@/lib/mongodb';
import { Admin } from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  await connectDB();

  const { oldPin, newPin, token } = await req.json();
  if (!oldPin || !newPin || !token) return NextResponse.json({ error: 'All fields required' }, { status: 400 });

  try {
    // Verify JWT
    jwt.verify(token, JWT_SECRET);

    const admin = await Admin.findOne({ role: 'super-admin' });
    if (!admin) return NextResponse.json({ error: 'Admin not found' }, { status: 404 });

    const isMatch = await bcrypt.compare(oldPin, admin.pin);
    if (!isMatch) return NextResponse.json({ error: 'Old PIN is wrong' }, { status: 401 });

    // Hash and save new PIN
    admin.pin = await bcrypt.hash(newPin, 10);
    await admin.save();

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid token or server error' }, { status: 401 });
  }
}
