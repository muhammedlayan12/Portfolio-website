import connectDB from '@/lib/mongodb';
import { Admin } from '@/models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    await connectDB();
    const { oldPin, newPin } = await req.json();
    
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    console.log("Token received:", token ? "Yes" : "No");

    if (!token) return NextResponse.json({ error: 'No token' }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Token verified for ID:", (decoded as any).id);

    const admin = await Admin.findOne({ role: 'super-admin' });
    if (!admin) {
      console.log("Admin not found in DB");
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(oldPin, admin.pin);
    console.log("Old PIN match:", isMatch);

    if (!isMatch) return NextResponse.json({ error: 'Old PIN is wrong' }, { status: 401 });

    const salt = await bcrypt.genSalt(10);
    admin.pin = await bcrypt.hash(newPin, salt);
    await admin.save();

    console.log("PIN updated successfully in DB");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("Error in API:", err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}