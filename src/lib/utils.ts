import { CampaignType } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const placeholderCampaign: CampaignType = {
  id: 1,
  creator: "",
  description: "",
  createdAt: 0,
  endDate: 0,
  goal: 0,
  imageLink: "",
  status: 1,
  tokenDecimals: 6,
  preferredToken: "",
  title: "",
  totalRaised: 0,
  contributions: []
}
