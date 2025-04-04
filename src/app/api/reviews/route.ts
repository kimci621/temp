import { reviews } from '@/lib/db/reviews';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(reviews);
}
