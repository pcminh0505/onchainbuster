import {
  ARBSCAN_API_BASE_URL,
  ARBSCAN_API_KEY,
  BASESCAN_API_BASE_URL,
  BASESCAN_API_KEY,
  BSCSCAN_API_BASE_URL,
  BSCSCAN_API_KEY,
  ETHERSCAN_API_BASE_URL,
  ETHERSCAN_API_KEY,
  OPTIMISMSCAN_API_BASE_URL,
  OPTIMISMSCAN_API_KEY,
} from '@constants/explorers';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');
  const action = searchParams.get('action');
  const chain = searchParams.get('chain');

  // Determine the appropriate API base URL and API key based on the chain
  let apiUrl: string;
  let apiKey: string | null;

  switch (chain?.toUpperCase()) {
    case 'ETH': {
      apiUrl = ETHERSCAN_API_BASE_URL;
      apiKey = ETHERSCAN_API_KEY;
      break;
    }
    case 'BASE': {
      apiUrl = BASESCAN_API_BASE_URL;
      apiKey = BASESCAN_API_KEY;
      break;
    }
    case 'OP': {
      apiUrl = OPTIMISMSCAN_API_BASE_URL;
      apiKey = OPTIMISMSCAN_API_KEY;
      break;
    }
    case 'ARB': {
      apiUrl = ARBSCAN_API_BASE_URL;
      apiKey = ARBSCAN_API_KEY;
      break;
    }
    case 'BSC': {
      apiUrl = BSCSCAN_API_BASE_URL;
      apiKey = BSCSCAN_API_KEY;
      break;
    }
    default:
      return Response.json({ error: 'Invalid chain type' }, { status: 400 });
  }

  const query = `module=account&action=${action}&address=${address}&apikey=${apiKey}`;

  const res = await fetch(`${apiUrl}?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.40.0',
    },
  });
  const data = await res.json();
  // console.log('=== res ', data);
  return Response.json({ data });
}
