import { RpcProvider } from 'starknet';

const rpcUrl = process.env.NEXT_PUBLIC_INFURA_MAINNET || '';
export const rpcProvider = new RpcProvider({ nodeUrl: rpcUrl });
