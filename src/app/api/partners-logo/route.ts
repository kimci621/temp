import { partnersLogo } from '@/lib/db/partners-logo';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(partnersLogo);
}
