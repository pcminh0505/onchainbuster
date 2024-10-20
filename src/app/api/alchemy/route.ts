import { ALCHEMY_API_KEY } from '@constants/web3Infra';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const chain = searchParams.get('chain');

  const alchemyBaseUrl = `https://${chain}.g.alchemy.com`;

  const req = (await request.json()) as TAlchemyRequest;
  // console.log('=== req ', req);
  const res = await fetch(`${alchemyBaseUrl}/v2/${ALCHEMY_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.40.0',
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
  // console.log('=== data ', data);
  return Response.json({ data });
}
