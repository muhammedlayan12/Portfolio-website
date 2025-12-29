import connectDB from '@/lib/mongodb';
import {Admin} from '@/models/Admin';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST() {
  try {
    await connectDB();

    const exists = await Admin.findOne({ role: 'super-admin' });
    if (exists) {
      return NextResponse.json({ message: 'Admin already exists' });
    }

    const hashedPin = await bcrypt.hash('4455', 10);

    await Admin.create({
      role: 'super-admin',
      pin: hashedPin,
    });

    return NextResponse.json({ message: 'Admin created' });
  } catch (err) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
