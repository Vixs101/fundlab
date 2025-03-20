
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import FundLab from "@/constants/abis/FundLab.json"

declare global {
  interface Window {
    ethereum?: any;
  }
}

// Replace with your contract's address
const contractAddress = '0x0f1b3dd8b4A1D2431e3D38302B4F79445CE7D679';

export const getContract = () => {
  if (!window.ethereum) {
    throw new Error('Ethereum object not found');
  }
  
  const provider = new Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, FundLab, signer as unknown as ethers.Signer);
}
