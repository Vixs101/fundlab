import { useCallback, useEffect, useMemo, useState } from "react";
import { useTokenContract } from "./services/useContract";
import { convertToDecimalValue, extractErrorMessage } from "@/functions/misc-functions";
import { formatToBigInt } from "@/functions/format";
import { toast as customToast } from "@/components/ui/use-toast"
import { contributionAmount, loadingState } from "@/app/state/atoms/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FUNDR_CONTRACT } from '@/constants/addresses/fundr-contract'
import { CHAIN_INFO, defaultChainId } from "@/lib/services/chain-config";
import { toast } from "react-toastify";
import { ApprovalType } from "@/types";
import { useAccount } from "wagmi";

export function useApprovalState(tokenInfo: any): [ApprovalType, () => Promise<void>] {
  const { address, chainId } = useAccount();
  const { address: tokenAddress, decimal: tokenDecimal } = tokenInfo
  const tokenContract = useTokenContract(tokenAddress)
  const [currentAllowance, setCurrentAllowance] = useState(0)
  const explorerURL = chainId && CHAIN_INFO[defaultChainId].explorer
  const amountToApprove = useRecoilValue(contributionAmount)
  
  useEffect(() => {
    async function getCurrentAllowance() {
      if (address) {
        const userAllowance = await tokenContract?.allowance(address, FUNDR_CONTRACT);
        const convertedAllowance = convertToDecimalValue(userAllowance?.toString(), tokenDecimal);
        setCurrentAllowance(convertedAllowance);
      }
    }

    getCurrentAllowance();
  }, [address, tokenContract, tokenDecimal]);

  const approvalState: ApprovalType = useMemo(() => {
    if (!amountToApprove) return ApprovalType.UNKNOWN
    if (!currentAllowance) return ApprovalType.UNKNOWN

    return (currentAllowance < parseFloat(amountToApprove)) ? ApprovalType.NOT_APPROVED : ApprovalType.APPROVED
  }, [amountToApprove, currentAllowance])


  const approveSpend = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    
    if (approvalState === ApprovalType.APPROVED) {
      toast.info("Spend already approved!")
      setIsLoading(false)
      return
    }

    if (!address) {
      toast.error("No wallet connected!")
      setIsLoading(false)
      return
    }

    if (!amountToApprove) {
      toast.error("Amount is required!")
      setIsLoading(false)
      return
    }

    try {
      const amountToSpend = formatToBigInt(amountToApprove, tokenDecimal)
      const approvalTx = await tokenContract?.approve(FUNDR_CONTRACT, amountToSpend)
      const approvalReceipt = await approvalTx.wait();

      if (approvalReceipt.status === 0) {
        customToast({ variant: "error", description: "Approve Spend failed! Try again" })
        setIsLoading(false)
      }

      const userAllowance = await tokenContract?.allowance(address, FUNDR_CONTRACT);
      const convertedAllowance = convertToDecimalValue(userAllowance?.toString(), tokenDecimal);
      setCurrentAllowance(convertedAllowance);
      setIsLoading(false)

      customToast({
        variant: "success",
        description: "Successfully approved spend",
        action: { url: `${explorerURL}/tx/${approvalReceipt?.hash || approvalReceipt?.transactionHash}`, label: "View in explorer" }
      })
    } catch (approveSpendError: {} | any) {
      const errorMessage = extractErrorMessage(approveSpendError)
      toast.error(errorMessage)
      setIsLoading(false)
    }
  }, [setIsLoading, approvalState, address, amountToApprove, tokenDecimal, tokenContract, explorerURL])
  

  return [ approvalState, approveSpend ]
}