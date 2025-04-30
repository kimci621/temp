import type { NewsType } from '@/types/news';
import { NextResponse } from 'next/server';

export async function GET() {
  const resp = await fetch('https://huntlee.ru/api/changelogs');
  const json = await resp.json();
  const { message } = json;

  return NextResponse.json<NewsType[]>(message);
}
