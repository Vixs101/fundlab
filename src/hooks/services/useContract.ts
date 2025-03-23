// import ERC20_TOKEN_ABI from '@/constants/abis/erc20-token.json';
import FUNDLAB_ABI from "@/constants/abis/FundLab.json"
import { FUNDLAB_CONTRACT } from '@/constants/addresses/fundlab-contract'
import { useReadContract } from 'wagmi';
import { useEffect, useState } from "react"

export const useReadAppContract = (functionName: string, args: unknown[] = []) => {
  const [isMounted, setIsMounted] = useState(false);
  
  const result = useReadContract({
    abi: FUNDLAB_ABI,
    address: FUNDLAB_CONTRACT,
    functionName,
    args,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return { data: null, loading: true, error: null };
  }

  return {
    data: result.data as unknown,
    loading: result.isPending,
    error: result.error,
  };
};