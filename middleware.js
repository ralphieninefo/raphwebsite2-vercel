import { NextResponse } from 'next/server';

export function middleware(req) {
  const ua = req.headers.get('user-agent') || '';
  const country = req.geo?.country || 'unknown';

  // 🌐 Block China and North Korea
  if (['CN', 'KP'].includes(country)) {
    return new Response('Access denied from your country 🚫', { status: 403 });
  }

  // 🤖 Block known bots, scrapers, CLI tools
  if (/bot|curl|wget|python|scrapy|java|postman/i.test(ua)) {
    return new Response('Access denied: bot-like behavior detected 🛑', { status: 403 });
  }

  return NextResponse.next();
}
