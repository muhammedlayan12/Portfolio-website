import connectDB from '@/lib/mongodb';
import { Admin } from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  await connectDB();

  const { pin } = await req.json();
  if (!pin) return NextResponse.json({ error: 'PIN is required' }, { status: 400 });

  const admin = await Admin.findOne({ role: 'super-admin' });
  if (!admin) return NextResponse.json({ error: 'Admin not set up' }, { status: 500 });

  const isMatch = await bcrypt.compare(pin, admin.pin);
  if (!isMatch) return NextResponse.json({ error: 'Wrong PIN' }, { status: 401 });

  // Generate JWT
  const token = jwt.sign({ role: admin.role, id: admin._id }, JWT_SECRET, { expiresIn: '12h' });

  return NextResponse.json({ token });
}
