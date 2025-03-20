"use client"


import { ReactNode } from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { eduChainTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Your dApp's chains
    chains: [eduChainTestnet],

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required App Info
    appName: "FundLab",

    // Optional App Info
    appDescription: "Bridging scientists and supporters through transparent, decentralized crowdfunding. Fund groundbreaking research with Web3 security and community-driven trust.",
    appUrl: "https://fundlab.xyz", // your app's URL
    appIcon: "https://fundlab.xyz/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
