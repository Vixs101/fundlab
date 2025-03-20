"use client";

import { useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from './useContract';
import { convertToDecimalValue } from "@/functions/misc-functions";

interface CampaignFormData {
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

interface UseCampaignCreationReturn {
  isLoading: boolean;
  error: string;
  createCampaign: (formData: CampaignFormData) => Promise<boolean>;
}

export const useCampaignCreation = (): UseCampaignCreationReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const createCampaign = async (formData: CampaignFormData): Promise<boolean> => {
    setError('');
    setIsLoading(true);

    try {
      // Validate form data
      if (!formData.title || !formData.description || !formData.target || !formData.deadline || !formData.image) {
        throw new Error('Please fill all fields');
      }

      const targetAmountWei = ethers.parseEther(formData.target);
      
      // Convert deadline to Unix timestamp
      const deadlineDate = new Date(formData.deadline);
      const deadlineTimestamp = Math.floor(deadlineDate.getTime() / 1000);
      
      console.log("Creating campaign with params:", {
        title: formData.title,
        description: formData.description,
        targetAmount: targetAmountWei.toString(),
        deadline: deadlineTimestamp,
        image: formData.image
      });
      
      const contract = await getContract();
      
      const tx = await contract.createCampaign(
        formData.title,
        formData.description,
        targetAmountWei,
        deadlineTimestamp,
        formData.image
      );
      
      // Wait for transaction to be mined
      await tx.wait();
      
      return true;
    } catch (err: any) {
      console.error('Error creating campaign:', err);
      setError(err.message || 'Failed to create campaign');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    createCampaign
  };
};